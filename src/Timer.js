import React from "react";
import "./timer.css";
import { useAppCtx } from "./context";
import { formatTime } from "./utils";

export function Timer() {
  const { audio } = useAppCtx();

  return (
    <div className="timer">
      <div className="timer__container">
        <span className="timer__current">{formatTime(audio.currentTime)}</span>
        <span className="timer__total"> / {formatTime(audio.duration)}</span>
      </div>
    </div>
  );
}
