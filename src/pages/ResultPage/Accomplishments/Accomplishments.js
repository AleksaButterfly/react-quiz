import React from "react";
import { number } from "prop-types";

import questions from "../../../questions";

import QuestionIcon from "./QuestionIcon";
import CorrectIcon from "./CorrectIcon";
import ScoreIcon from "./ScoreIcon";

import css from "./Accomplishments.module.scss";

const accomplishment = (title, value, icon) => {
  return (
    <div className={css.accomplishment}>
      <div>
        <h4 className={css.accomplishmentHeading}>{title}</h4>
        <p className={css.accomplishmentText}>{value}</p>
      </div>
      {icon}
    </div>
  );
};

const Accomplishments = (props) => {
  const { score } = props;
  return (
    <div className={css.root}>
      <h3 className={css.accomplishmentTitle}>See what you've accomplished</h3>
      <div className={css.accomplishments}>
        {accomplishment("Questions", "5", <QuestionIcon />)}
        {accomplishment(
          "Correct",
          `${score} / ${questions.length}`,
          <CorrectIcon />
        )}
        {accomplishment("Score", score, <ScoreIcon />)}
      </div>
    </div>
  );
};

Accomplishments.defaultProps = {
  score: 0,
};

Accomplishments.propTypes = {
  score: number.isRequired,
};

export default Accomplishments;
