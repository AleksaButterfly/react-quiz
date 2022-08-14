import React from "react";
import { oneOfType, string, number } from "prop-types";

// External
import classNames from "classnames";

// Shared
import questions from "../../questions";
import css from "./ScoreBadge.module.scss";

const scoreTitle = (score) => {
  if (score === 0) {
    return "You have scored";
  } else {
    return "Congratulations! You have scored";
  }
};

const ScoreBadge = (props) => {
  const { rootClassName, className, score } = props;
  const classes = classNames(rootClassName || css.root, className);

  // As we can expect score as a string, we need to
  // ensure that we format it
  const formattedScore = Number(score);
  return (
    <div className={classes}>
      <h3 className={css.title}>{scoreTitle(formattedScore)}</h3>
      <div className={css.circle}>
        <h1 className={css.circleHeading}>{score}</h1>
        <p className={css.circleSubHeading}>{`Out of ${questions.length}`}</p>
      </div>
    </div>
  );
};

ScoreBadge.defaultProps = {
  rootClassName: null,
  className: null,
  score: null,
};

ScoreBadge.propTypes = {
  rootClassName: string,
  className: string,
  score: oneOfType([number, string]).isRequired,
};

export default ScoreBadge;
