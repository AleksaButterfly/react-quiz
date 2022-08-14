import React, { useState, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// Storage
import useLocalStorage from "use-local-storage";

// Shared
import { Page, ScoreBadge, Button } from "../../components";
import Accomplishments from "./Accomplishments/Accomplishments";

import css from "./ResultPage.module.scss";

const PAGE_TITLE = "Result";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [score, setScore] = useState(location?.state?.score);
  const [savedAnswers, setSavedAnswers] = useLocalStorage("savedAnswers", []);

  useEffect(() => {
    if (savedAnswers.length > 0) {
      const correctAnswers = savedAnswers.filter((a) => a.isCorrect);
      setScore(correctAnswers.length);
      setSavedAnswers([]);
    }

    // eslint-disable-next-line
  }, []);

  if (score === null || typeof score === "undefined") {
    return <Navigate to="/" />;
  }

  const handleStartAgain = () => {
    navigate("/question");
  };

  return (
    <Page className={css.page} title={PAGE_TITLE}>
      <ScoreBadge className={css.scoreBadge} score={score} />
      <Accomplishments score={score} />
      <Button className={css.startAgainButton} onClick={handleStartAgain}>
        Start again
      </Button>
    </Page>
  );
};

export default ResultPage;
