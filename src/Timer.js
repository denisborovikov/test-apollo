import React from "react";
import "./Timer.css";
import { useAppCtx } from "./context";
import { formatTime } from "./utils";

export function Timer() {
  const { state } = useAppCtx();

  return (
    <div className="timer">
      <div className="timer__container">
        <span className="timer__current">{formatTime(state.time)}</span>
        <span className="timer__total"> / {formatTime(state.duration)}</span>
      </div>
    </div>
  );
}
