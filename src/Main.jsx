import React from 'react';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from "./App.jsx";
import Registration from "./components/Registration.jsx";
import Login from './components/Login.jsx';
import ListQ from './components/ListQ.jsx';
import SubmitQ from './components/SubmitQ.jsx';
import Flashcards from './containers/Flashcards.jsx';
import Homepage from './containers/Homepage.jsx';

//const rootElement = document.getElementById("root");
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< App />} >
            <Route path="/registration" element = {<Registration />} />
            <Route path="/login" element = {<Login />} />
        </Route>

        <Route path='/homepage' element={<Homepage/>} />
        <Route path='/listQ' element={<ListQ/>} />
        <Route path='/submitQ' element = {<SubmitQ/>} />
        <Route path='/flashCards' element = {<Flashcards/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default Main;
