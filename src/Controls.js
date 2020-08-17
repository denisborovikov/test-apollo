import React from "react";
import "./Controls.css";
import { Pause, Play, Rewind } from "./Icons";
import { useAppCtx } from "./context";

export function Controls() {
  const { audio, state, dispatch } = useAppCtx();

  const { isPlaying, rate } = state;

  function handlePlay() {
    if (isPlaying) {
      dispatch({ type: "pause" });
      audio.pause();
    } else {
      dispatch({ type: "play" });
      audio.play();
    }
  }

  function rewind() {
    audio.currentTime -= 5;
  }

  function fastForward() {
    audio.currentTime += 5;
  }

  return (
    <div className="controls">
      <div className="controls__container">
        <div className="controls__control rew">
          <Rewind onClick={rewind} />
        </div>
        <div className="controls__play">
          {isPlaying ? (
            <Pause onClick={handlePlay} />
          ) : (
            <Play onClick={handlePlay} />
          )}
        </div>
        <div className="controls__control ff">
          <Rewind onClick={fastForward} />
        </div>
        <div className="controls__timestamp">{rate.toFixed(1)}x</div>
      </div>
    </div>
  );
}
