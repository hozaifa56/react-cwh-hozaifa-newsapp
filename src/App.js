import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Spinner from './components/Spinner';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state={
    progress:0,
  }
  
  
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div className='container'> 
      <Router>
        <Navbar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
        //onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path="/" element={< News setProgress={this.setProgress}  key='general' pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/Business" element={ <News setProgress={this.setProgress} key='business'  pageSize={6} country="in" category="business"/>}></Route>
          <Route path="/Entertainment" element={<News setProgress={this.setProgress} key='entertainment'  pageSize={6} country="in" category="entertainment"/>}></Route>
          <Route path="/General" element={ <News setProgress={this.setProgress} key='general'  pageSize={6} country="in" category="general"/>}></Route>
          <Route path="/Health" element={ <News setProgress={this.setProgress} key='health'  pageSize={6} country="in" category="health"/>}></Route>
          <Route path="/Science" element={ <News setProgress={this.setProgress} key='science'  pageSize={6} country="in" category="science"/>}></Route>
          <Route path="/Sports" element={ <News setProgress={this.setProgress} key='sports'  pageSize={6} country="in" category="sports"/>}></Route>
          <Route path="/Technology" element={ <News setProgress={this.setProgress}  key='technology' pageSize={6} country="in" category="technology"/>}></Route>
          <Route path="/politics" element={ <News setProgress={this.setProgress}  key='politics' pageSize={6} country="in" category="politics"/>}></Route>

        </Routes>
        </Router>
        
      </div>
    )
  }
}