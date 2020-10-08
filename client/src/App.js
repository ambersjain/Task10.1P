import React, { useState } from 'react';
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

const App = () => {
  const [radio, setRadio] = useState('');
  const [option, setOption] = useState('amber');
  const handleSetRadio = (event) => {
    const value = event.target.value;
    setRadio(value);
  }
  const handleSetOption = (event) => {
    const name = event.target.name;
    if (name === 'choice') {
      setOption("choice");
    } else if (name === 'decision') {
      setOption("decision");
    } else if (name === 'sentence') {
      setOption("sentence");
    }

  }
  return (
    <div className="container-fluid">
      <NavbarBoot />
      <TaskType
        name1='choice'
        name2='decision'
        name3='sentence'
        type='radio'
        value1='choice'
        value2='decision'
        value3='sentence'
        onChange = {handleSetRadio}
        onChange2 = {handleSetOption}
        radio = {radio}
      />
      <TaskDescription />
      <TaskSetup option={option}/>
      <WorkerRequirement />
      <button className="btn btn-outline-success button-pos btn-md" type="submit" >Save</button>
    </div>
  );
}


export default App;
