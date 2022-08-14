import React from "react";
import { string } from "prop-types";

const ICON_HEIGHT = 16;
const ICON_WIDTH = 16;

const SuccessIcon = (props) => {
  const { className } = props;
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
        stroke="#2ecc71"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m4 8 2.05 1.64a.48.48 0 0 0 .4.1.5.5 0 0 0 .34-.24L10 4" />
        <circle cx={7} cy={7} r={6.5} />
      </g>
    </svg>
  );
};

SuccessIcon.defaultProps = {
  className: null,
};

SuccessIcon.propTypes = {
  className: string,
};

export default SuccessIcon;
