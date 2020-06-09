import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import profile from './profile.jpg';
import Course from './course.js'
import NameFunction from './NameFunction.js'
import './App.css';
import './index.css';

const Assignment = () => {
  return (
  <div className="App">
      <header className="header">
      <img src={logo} className="App-logo" alt="logo" width="100" />
      </header>
      <div className="content">
        <Course className="courseName" CourseName="React Bootcamp Class" AssignNumber="Assignment # 3" />
        <NameFunction firstName="Salman" lastName="Azeem" age={25} exp={25 - 22} />
        <img src={profile} className="profilePic" alt="Salman Azeem" />
      </div> 
    </div>
  )
}

ReactDOM.render(<Assignment/>, document.querySelector('#root'));