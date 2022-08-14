import React from "react";
import { useParams, Navigate } from "react-router-dom";

// Shared
import questions from "../../questions";
import { Page, Quiz } from "../../components";

const QuizPage = () => {
  const params = useParams();
  const { id } = params;

  const currentQuestion = id - 1 || 0;

  const shouldRedirect =
    currentQuestion >= questions.length || currentQuestion === -1;

  if (shouldRedirect) {
    return <Navigate to="/question/1" />;
  }

  return (
    <Page>
      <Quiz questions={questions} currentQuestion={currentQuestion} />
    </Page>
  );
};

export default QuizPage;
