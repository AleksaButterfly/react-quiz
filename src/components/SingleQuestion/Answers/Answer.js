import React from "react";
import { string, bool, func } from "prop-types";

// External
import classNames from "classnames";

// Shared
import SuccessIcon from "./SuccessIcon";
import ErrorIcon from "./ErrorIcon";
import css from "./Answers.module.scss";

const AnswerIcon = (props) => {
  const { isCorrect } = props;
  return isCorrect ? (
    <SuccessIcon className={css.answerIcon} />
  ) : (
    <ErrorIcon className={css.answerIcon} />
  );
};

const Answer = (props) => {
  const {
    name,
    isActive,
    isCorrect,
    setSelectedAnswer,
    isQuestionAlreadyAnswered,
  } = props;
  return (
    <li
      className={classNames(css.answer, {
        [css.activeAnswer]: isActive,
        [css.successAnswer]: isQuestionAlreadyAnswered && isCorrect,
        [css.failAnswer]: isQuestionAlreadyAnswered && !isCorrect,
      })}
      onClick={setSelectedAnswer}
    >
      {isQuestionAlreadyAnswered ? <AnswerIcon isCorrect={isCorrect} /> : null}
      {name}
    </li>
  );
};

Answer.defaultProps = {
  name: null,
  isActive: false,
  isCorrect: false,
  setSelectedAnswer: null,
  isQuestionAlreadyAnswered: false,
};

Answer.propTypes = {
  name: string.isRequired,
  isActive: bool,
  isCorrect: bool,
  setSelectedAnswer: func.isRequired,
  isQuestionAlreadyAnswered: bool.isRequired,
};

export default Answer;
