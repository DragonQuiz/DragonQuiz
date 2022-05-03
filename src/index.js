import React from 'react'
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.jsx";

const root = document.getElementById("root");

render(
  <App />,
  root
);