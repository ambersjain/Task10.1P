import React, { Component } from 'react';
import './css/App.css';
import NavbarBoot from './components/NavbarBoot';
import TaskType from './components/TaskType';
import TaskDescription from './components/TaskDescription';
import TaskSetup from './components/TaskSetup';
import WorkerRequirement from './components/WorkerRequirement';

/*
  This set's up the style and HTML for navbar
*/
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavbarBoot />
        <TaskType />
        <TaskDescription />
        <TaskSetup />
        <WorkerRequirement />
        <button className="btn btn-outline-success button-pos btn-md" type="submit" >Save</button>
      </div>
    );
  }
}

export default App;
