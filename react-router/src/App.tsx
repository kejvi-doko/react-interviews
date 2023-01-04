import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
      <>
          <Router>
          <div>
              <Link to='/home'>Home</Link>
          </div>

          <Routes>
              <Route path='/about' element={<About/>} />
              <Route path='/home/:name' element={<Home/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path='*' element={<PageNotFound/>} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
