import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import App from "./App.jsx";
import Login from './components/Login.jsx';
import ListQ from './containers/ListQ.jsx';
import SubmitQ from './components/SubmitQ.jsx';
import Flashcards from './containers/Flashcards.jsx';
import Homepage from './components/Homepage.jsx';
import Registration from './containers/Registration.jsx';
import Answer from './components/Answer.jsx';

//const rootElement = document.getElementById("root");
function Main() {
  return (
    <BrowserRouter>
      <Link to="/">Dragon Quiz</Link>
      <Routes>
        <Route exact path="/" element={< App />} />
        <Route path="/registration" element = {<Registration />} />
        <Route path="/login" element = {<Login />} />
        <Route exact path='/homepage' element={<Homepage/>} />
        <Route path='/listQ' element={<ListQ/>} />
        <Route path='/submitQ/:username' element = {<SubmitQ/>} />
        <Route path='/flashCards' element = {<Flashcards/>} />
        <Route path='/answer' element = {<Answer/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default Main;
