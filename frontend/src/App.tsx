import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './resources/css/App.css';
import {PAGES} from "./common/constants";
import QuestionsPage from "./pages/QuestionsPage";

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path={PAGES.questions} element={<QuestionsPage />}/>
    </Routes>
  </BrowserRouter>);
}
