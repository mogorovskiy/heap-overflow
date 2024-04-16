import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './resources/css/App.css';
import {PAGES} from "./common/constants";
import QuestionsPage from "./pages/QuestionsPage";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path={PAGES.questions} element={<QuestionsPage />}/>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>);
}
