import React, { useState, useEffect } from "react";
import { array, number } from "prop-types";

// External
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import useSound from "use-sound";

// Shared
import { SingleQuestion } from "../";
import correctSound from "../../assets/sounds/correct.mp3";
import wrongSound from "../../assets/sounds/wrong.mp3";
import css from "./Quiz.module.scss";

const NEXT_QUESTION_DELAY = 1200;

const Quiz = (props) => {
  const { questions, currentQuestion } = props;

  // Local storage state
  const [savedAnswers, setSavedAnswers] = useLocalStorage("savedAnswers", []);

  // State
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isQuestionAlreadyAnswered, setQuestionAlreadyAnswered] =
    useState(false);
  const [nextQuestionInProgress, setNextQuestionInProgress] = useState(false);

  // Sound
  const [playCorrectSound] = useSound(correctSound);
  const [playWrongSound] = useSound(wrongSound);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const storageAnswer = savedAnswers.find((a) => a.id === currentQuestion);
    if (storageAnswer) {
      setSelectedAnswer(storageAnswer.answer);
      setQuestionAlreadyAnswered(true);
    } else {
      setSelectedAnswer(null);
      setQuestionAlreadyAnswered(false);
    }

    // eslint-disable-next-line
  }, [params.id, savedAnswers]);

  const previousQuestion = savedAnswers[currentQuestion - 1];
  const hasCompletedPreviousQuestion = !!previousQuestion;
  const lastAnsweredQuestion = savedAnswers[savedAnswers.length - 1];

  useEffect(() => {
    if (currentQuestion > 0 && !hasCompletedPreviousQuestion) {
      if (savedAnswers.length > 0)
        navigate(`/question/${lastAnsweredQuestion?.id + 2}`);
      else navigate("/question");
    }

    // eslint-disable-next-line
  }, []);

  const showQuestion = currentQuestion < questions.length;
  const name = questions[currentQuestion].question;
  const answers = questions[currentQuestion].answers;
  const question = { name, answers };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const isCorrectQuestion =
    selectedAnswer === questions[currentQuestion].correct;

  const playSound = () => {
    if (isCorrectQuestion) {
      playCorrectSound();
    } else {
      playWrongSound();
    }
  };

  const handleNext = () => {
    navigate(`/question/${currentQuestion + 2}`);
  };

  const handleReturn = () => {
    navigate(`/question/${currentQuestion}`);
  };

  const handleAnswer = () => {
    // Play correct or wrong sound
    playSound();

    // Notify component that moving to the next question
    // is in progress
    setNextQuestionInProgress(true);

    // Handle answer states
    setSavedAnswers([
      ...savedAnswers,
      {
        id: currentQuestion,
        answer: selectedAnswer,
        correct: questions[currentQuestion].correct,
        isCorrect: isCorrectQuestion,
      },
    ]);
    setSelectedAnswer(null);

    // Redirect away to the next question or score page
    setTimeout(() => {
      setNextQuestionInProgress(false);
      if (isLastQuestion) {
        const correctAnswers = savedAnswers.filter((a) => a.isCorrect);
        const score = correctAnswers.length;
        navigate("/result", { state: { score } });
      } else {
        handleNext();
      }
    }, NEXT_QUESTION_DELAY);
  };

  return (
    <div className={css.root}>
      <span className={css.questionIndex}>
        {`${currentQuestion + 1} / ${questions.length}`}
      </span>
      <SingleQuestion
        show={showQuestion}
        showReturnButton={currentQuestion > 0}
        question={question}
        handleNext={handleNext}
        handleReturn={handleReturn}
        handleAnswer={handleAnswer}
        correctAnswer={questions[currentQuestion].correct}
        isQuestionAlreadyAnswered={isQuestionAlreadyAnswered}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
        nextQuestionInProgress={nextQuestionInProgress}
      />
    </div>
  );
};

Quiz.defaultProps = {
  questions: [],
  currentQuestion: null,
};

Quiz.propTypes = {
  questions: array.isRequired,
  currentQuestion: number.isRequired,
};

export default Quiz;
