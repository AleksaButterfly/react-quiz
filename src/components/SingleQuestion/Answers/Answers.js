import React from "react";
import { array, bool, func } from "prop-types";

// Shared
import Answer from "./Answer";
import css from "./Answers.module.scss";

const Answers = (props) => {
  const {
    correctAnswer,
    answers,
    selectedAnswer,
    setSelectedAnswer,
    isQuestionAlreadyAnswered,
  } = props;
  return (
    <ul className={css.answerList}>
      {answers.map((answer, index) => {
        const isActive = selectedAnswer === index;
        const isCorrect = correctAnswer === index;
        return (
          <Answer
            key={index}
            name={answer}
            isActive={isActive}
            isCorrect={isCorrect}
            setSelectedAnswer={() => setSelectedAnswer(index)}
            isQuestionAlreadyAnswered={isQuestionAlreadyAnswered}
          />
        );
      })}
    </ul>
  );
};

Answers.defaultProps = {
  answers: [],
  setSelectedAnswer: null,
  isQuestionAlreadyAnswered: false,
};

Answers.propTypes = {
  answers: array.isRequired,
  setSelectedAnswer: func.isRequired,
  isQuestionAlreadyAnswered: bool.isRequired,
};

export default Answers;
