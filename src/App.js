import React from "react";
import "./normilize.css";
import "./styles.css";
import { Controls } from "./Controls";
import { Transcript } from "./Transcript";
import { Timer } from "./Timer";
import transcript from "./transcript.json";
import { AppCtx } from "./context";

const AUDIO =
  "https://zenprospect-production.s3.amazonaws.com/uploads/phone_call/uploaded_content/59e106639d79684277df770d.wav";

//

export const playbackRates = [0.5, 1, 1.5, 2];

const initialState = {
  isPlaying: false,
  time: 0,
  rate: 1,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "setTime":
      return { ...state, time: payload };

    case "pause":
      return { ...state, isPlaying: false };

    case "play":
      return { ...state, isPlaying: true };

    case "cycleRate": {
      return {
        ...state,
        rate: state.rate + 1 === playbackRates.length ? 0 : state.rate + 1,
      };
    }

    case "ended": {
      return { ...state, isPlaying: false, time: 0 };
    }

    default:
      throw new Error("Action type is missing in reducer");
  }
}

export default function App() {
  const audio = React.useRef(new Audio(AUDIO));

  const [state, dispatch] = React.useReducer(reducer, initialState);

  // We'll use useReducer/useContext to manage the global state of our application.
  // 1. I'd like to get bonus points but there's no any reason to use Redux.
  // 2. Usually we split state and dispatch into different contexts, because state changes often
  // and dispatch never changes, but in our test task we won't do that.
  const globalState = React.useMemo(
    () => ({
      audio: audio.current,
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  React.useEffect(() => {
    audio.current.playbackRate = playbackRates[state.rate];
  }, [audio, state.rate]);

  React.useEffect(() => {
    function handleEvent() {
      dispatch({ type: "setTime", payload: audio.currentTime });
    }

    const instance = audio.current;

    instance.addEventListener("timeupdate", handleEvent);
    return () => instance.removeEventListener("timeupdate", handleEvent);
  }, [dispatch]);

  React.useEffect(() => {
    function handleEvent() {
      dispatch({ type: "ended" });
    }

    const instance = audio.current;

    instance.addEventListener("ended", handleEvent);
    return () => instance.removeEventListener("ended", handleEvent);
  }, [audio, dispatch]);

  React.useEffect(() => {
    function handleEvent() {
      dispatch({ type: "pause" });
    }

    const instance = audio.current;

    instance.addEventListener("pause", handleEvent);
    return () => instance.removeEventListener("pause", handleEvent);
  }, [audio, dispatch]);

  React.useEffect(() => {
    function handleEvent() {
      dispatch({ type: "play" });
    }

    const instance = audio.current;

    instance.addEventListener("play", handleEvent);
    return () => instance.removeEventListener("play", handleEvent);
  }, [audio, dispatch]);

  return (
    <AppCtx.Provider value={globalState}>
      <div className="App">
        <Controls />
        <Timer />
        <Transcript data={transcript} />
      </div>
    </AppCtx.Provider>
  );
}
