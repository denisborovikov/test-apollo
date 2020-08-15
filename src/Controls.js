import React from "react";
import "./Controls.css";

function Rewind(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19">
      <path
        fill="#556c86"
        d="M9 3.1c3.9.5 7 3.9 7 7.9s-3.1 7.4-7 7.9v-2c2.8-.5 5-2.9 5-5.9 0-3-2.2-5.4-5-5.9V9L4.5 4.5 9 0zM3.1 17.3l1.4-1.4a6 6 0 002.5 1v2c-1.4-.2-2.7-.7-3.9-1.6zm-1-5.3a6 6 0 001 2.5l-1.4 1.4C.8 14.7.3 13.4.1 12zm1-4.5a6 6 0 00-1 2.5h-2c.1-1.4.7-2.7 1.6-3.9z"
      />
    </svg>
  );
}

export function Controls() {
  return (
    <div className="controls">
      <div className="rew">
        <Rewind />
      </div>
      <div className="play"></div>
      <div className="ff"></div>
    </div>
  );
}
