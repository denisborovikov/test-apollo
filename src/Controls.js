import React from "react";
import "./Controls.css";
import { Pause, Play, Rewind } from "./Icons";
import { useAppCtx } from "./context";
import { playbackRates } from "./App";

export function Controls() {
  const { audio, state, dispatch } = useAppCtx();

  const { isPlaying, rate } = state;

  return (
    <div className="controls">
      <div className="controls__container">
        <div className="controls__control rew">
          <Rewind onClick={() => audio.currentTime -= 10} />
        </div>
        <div className="controls__play">
          {isPlaying ? (
            <Pause onClick={() => audio.pause()} />
          ) : (
            <Play onClick={() => audio.play()} />
          )}
        </div>
        <div className="controls__control ff">
          <Rewind onClick={() => audio.currentTime += 10} />
        </div>
        <div
          className="controls__timestamp"
          onClick={() => dispatch({ type: "cycleRate" })}
        >
          {playbackRates[rate].toFixed(1)}x
        </div>
      </div>
    </div>
  );
}
