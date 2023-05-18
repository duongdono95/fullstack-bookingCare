import React from 'react';
import ReactDOM from 'react-dom/client'
import { router } from './routers/routers'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import './App.scss'
function App() {
  return (
    <div className="App">
      <GlobalStyles><RouterProvider router={router}/></GlobalStyles>
    </div>
  );
}

export default App;
