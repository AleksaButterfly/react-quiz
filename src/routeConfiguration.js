import { QuizPage, ResultPage } from "./pages";
import { Navigate } from "react-router-dom";

const routes = () => {
  return [
    {
      path: "/",
      name: "QuizPage",
      component: <QuizPage />,
    },
    {
      path: "/question",
      name: "QuestionRedirectPage",
      component: <Navigate to="/question/1" />,
    },
    {
      path: "/question/:id",
      name: "QuestionPage",
      component: <QuizPage />,
    },
    {
      path: "/result",
      name: "ResultPage",
      component: <ResultPage />,
    },
  ];
};

export default routes;
