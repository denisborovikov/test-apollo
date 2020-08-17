import React from "react";
import "./Transcript.css";
import { useAppCtx } from "./context";
import { formatTime } from "./utils";

export function Transcript({ transcript }) {
  return (
    <div className="transcript">
      {transcript.word_timings.map((d, i) => (
        <TranscriptItem key={i} timings={d} prospect={i % 2 !== 0} />
      ))}
    </div>
  );
}

export function TranscriptItem({ timings, prospect }) {
  const { audio } = useAppCtx();

  function isCurrent({ startTime, endTime }) {
    return (
      audio.currentTime >= parseFloat(startTime) &&
      audio.currentTime < parseFloat(endTime)
    );
  }

  function jumpToWord(startTime) {
    audio.currentTime = parseFloat(startTime);
    audio.play();
  }

  return (
    <div
      className={`transcript-item ${prospect ? "prospect" : ""} ${
        isCurrent({
          startTime: timings[0].startTime,
          endTime: timings[timings.length - 1].endTime,
        })
          ? "current"
          : ""
      }`}
    >
      <div className="transcript-item__time">
        {formatTime(parseFloat(timings[0].startTime))}
      </div>
      <div className="transcript-item__text">
        {timings.map((element, i) => (
          <React.Fragment key={i}>
            <span
              className={`word ${isCurrent(element) ? "current" : ""}`}
              onClick={() => jumpToWord(element.startTime)}
            >
              {element.word}
            </span>{" "}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
