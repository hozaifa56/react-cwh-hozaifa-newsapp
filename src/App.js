import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div className='container'> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={< News  key='general' pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News key='business'  pageSize={6} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News key='entertainment'  pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News key='general'  pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News key='health'  pageSize={6} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News key='science'  pageSize={6} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News key='sports'  pageSize={6} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News  key='technology' pageSize={6} country="in" category="technology"/>}></Route>
          <Route path="/politics" element={ <News  key='politics' pageSize={6} country="in" category="politics"/>}></Route>

        </Routes>
        </Router>
        
      </div>
    )
  }
}
