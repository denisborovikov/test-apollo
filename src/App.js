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

const playbackRates = [0.5, 1, 1.5, 2];

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

    case "increaseRate": {
      return { ...state, rate: Math.min(playbackRates.length, state.rate + 1) };
    }

    case "decreaseRate": {
      return { ...state, rate: Math.min(0, state.rate - 1) };
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
    [audio.current, state, dispatch]
  );

  React.useEffect(() => {
    audio.current.playbackRate = playbackRates[state.rate];
  }, [audio, state.rate]);

  React.useEffect(() => {
    function setTimestamp() {
      dispatch({ type: "setTime", payload: audio.currentTime });
    }

    audio.current.addEventListener("timeupdate", setTimestamp);
    return () => audio.current.removeEventListener("timeupdate", setTimestamp);
  }, [audio, dispatch]);

  React.useEffect(() => {
    function setEnded() {
      dispatch({ type: "ended" });
    }

    audio.current.addEventListener("ended", setEnded);
    return () => audio.current.removeEventListener("timeupdate", setEnded);
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
