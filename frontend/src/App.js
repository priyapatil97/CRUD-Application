import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom"
import Routing from './Components/Routing';


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>

    </>
  );
}

export default App;
