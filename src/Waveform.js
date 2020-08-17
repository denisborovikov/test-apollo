import React from "react";
import "./Waveform.css";
import { useAppCtx } from "./context";

export function Waveform({ transcript }) {
  const { audio, state } = useAppCtx();
  const ref = React.useRef();

  const progress = (state.time / audio.duration) * 100;

  const waveforms = React.useMemo(() => {
    return transcript.word_timings.reduce((arr, el) => {
      const start = (parseFloat(el[0].startTime) / audio.duration) * 100;
      const endTime = parseFloat(el[el.length - 1].endTime);
      const end = (endTime / audio.duration) * 100;

      return [...arr, { start, endTime, length: end - start }];
    }, []);
  }, [transcript, audio.duration]);

  function handleMouseDown(e) {
    if (!ref.current) return;

    audio.currentTime =
      ((e.clientX - ref.current.offsetLeft) / ref.current.offsetWidth) *
      audio.duration;
    audio.play();
  }

  return (
    <div className="waveform">
      <div className="waveform__participants">
        <div className="waveform__participant you">You</div>
        <div className="waveform__participant prospect">Prospect</div>
      </div>
      <div
        ref={ref}
        className="waveform__playback"
        onMouseDown={handleMouseDown}
      >
        <div
          className="waveform__progress"
          style={{ width: isNaN(progress) ? 0 : `${progress}%` }}
        ></div>
        {waveforms.map((wave, i) => (
          <div
            key={i}
            className={`waveform__item ${
              i % 2 === 0 ? "you" : "prospect"
            } ${state.time > wave.endTime ? 'played' : ''}`}
            style={{
              left: `${wave.start}%`,
              width: `${wave.length}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
