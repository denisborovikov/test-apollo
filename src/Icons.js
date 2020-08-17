import React from 'react';

export function Rewind(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" {...props}>
      <path
        fill="currentColor"
        d="M9 3.1c3.9.5 7 3.9 7 7.9s-3.1 7.4-7 7.9v-2c2.8-.5 5-2.9 5-5.9 0-3-2.2-5.4-5-5.9V9L4.5 4.5 9 0zM3.1 17.3l1.4-1.4a6 6 0 002.5 1v2c-1.4-.2-2.7-.7-3.9-1.6zm-1-5.3a6 6 0 001 2.5l-1.4 1.4C.8 14.7.3 13.4.1 12zm1-4.5a6 6 0 00-1 2.5h-2c.1-1.4.7-2.7 1.6-3.9z"
      />
    </svg>
  );
}

export function Play(props) {
  return (
    <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#229FFB" offset="0%" />
          <stop stopColor="#028FEE" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M47 .5c4.54 0 8.66 1.86 11.65 4.85a16.45 16.45 0 010 23.3 16.45 16.45 0 01-23.3 0 16.45 16.45 0 010-23.3C38.34 2.35 42.46.5 47 .5zm-3.5 7.46v17l11.33-7.93L43.5 7.96z"
        transform="translate(-30)"
        fill="url(#a)"
        stroke="#028BE6"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Pause(props) {
  return (
    <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <stop stopColor="#229FFB" offset="0%" />
          <stop stopColor="#028FEE" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M17 .5c4.54 0 8.66 1.86 11.65 4.85a16.45 16.45 0 010 23.3 16.45 16.45 0 01-23.3 0 16.45 16.45 0 010-23.3C8.34 2.35 12.46.5 17 .5zm-1.5 9h-4v15h4v-15zm7 0h-4v15h4v-15z"
        fill="url(#a)"
        stroke="#028BE6"
        fillRule="evenodd"
      />
    </svg>
  );
}
