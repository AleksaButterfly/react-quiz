import React from "react";
import { bool, object, func, number } from "prop-types";

// Shared
import { Button, SecondaryButton } from "../";
import Answers from "./Answers/Answers";
import css from "./SingleQuestion.module.scss";

const NEXT_BUTTON_TEXT = "Next";
const RETURN_BUTTON_TEXT = "Return";

const SingleQuestion = (props) => {
  const {
    show,
    showReturnButton,
    question,
    handleNext,
    handleReturn,
    handleAnswer,
    isQuestionAlreadyAnswered,
    correctAnswer,
    selectedAnswer,
    setSelectedAnswer,
    nextQuestionInProgress,
  } = props;

  const { name, answers } = question;
  const buttonDisabled =
    selectedAnswer === null ||
    typeof selectedAnswer === "undefined" ||
    nextQuestionInProgress;

  return show ? (
    <div className={css.root}>
      <h2 className={css.questionHeading}>{name}</h2>
      <Answers
        correctAnswer={correctAnswer}
        answers={answers}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        isQuestionAlreadyAnswered={isQuestionAlreadyAnswered}
      />
      <div className={css.buttons}>
        {showReturnButton ? (
          <SecondaryButton
            onClick={handleReturn}
            disabled={nextQuestionInProgress}
          >
            {RETURN_BUTTON_TEXT}
          </SecondaryButton>
        ) : null}
        <Button
          className={css.submitButton}
          onClick={isQuestionAlreadyAnswered ? handleNext : handleAnswer}
          disabled={buttonDisabled}
          inProgress={nextQuestionInProgress}
        >
          {NEXT_BUTTON_TEXT}
        </Button>
      </div>
    </div>
  ) : null;
};

SingleQuestion.defaultProps = {
  show: false,
  showReturnButton: false,
  question: null,
  handleNext: null,
  handleReturn: null,
  handleAnswer: null,
  isQuestionAlreadyAnswered: false,
  setSelectedAnswer: null,
  nextQuestionInProgress: false,
};

SingleQuestion.propTypes = {
  show: bool,
  showReturnButton: bool,
  question: object.isRequired,
  handleNext: func.isRequired,
  handleReturn: func.isRequired,
  handleAnswer: func.isRequired,
  isQuestionAlreadyAnswered: bool.isRequired,
  correctAnswer: number,
  selectedAnswer: number,
  setSelectedAnswer: func.isRequired,
  nextQuestionInProgress: bool.isRequired,
};

export default SingleQuestion;
