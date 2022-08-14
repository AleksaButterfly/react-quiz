import React from "react";
import { string } from "prop-types";

const ICON_HEIGHT = 16;
const ICON_WIDTH = 16;

const ErrorIcon = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      height={ICON_HEIGHT}
      width={ICON_WIDTH}
    >
      <g
        fill="none"
        stroke="#cc0000"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.12 4.88 4.88 9.12M4.88 4.88l4.24 4.24" />
        <circle cx={7} cy={7} r={6.5} />
      </g>
    </svg>
  );
};

ErrorIcon.defaultProps = {
  className: null,
};

ErrorIcon.propTypes = {
  className: string,
};

export default ErrorIcon;
