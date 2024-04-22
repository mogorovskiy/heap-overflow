import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './resources/css/App.css';
import {PAGES} from "./common/constants";
import QuestionsPage from "./pages/question/QuestionsPage";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import QuestionPage from "./pages/question/QuestionPage";
import AskQuestionPage from "./pages/question/AskQuestionPage";

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NoPage />} />
      <Route path={PAGES.questions} element={<QuestionsPage />}/>
      <Route path={PAGES.questions + "/:questionId"} element={<QuestionPage />} />
      <Route path={PAGES.askQuestion} element={<AskQuestionPage />} />
    </Routes>
  </BrowserRouter>);
}
