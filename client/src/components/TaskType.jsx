import React from 'react';


const TaskType = () => {
    return (<div className="container-fluid">
    <div className="row">
        <legend className="col-form-label col-sm-2 pt-0">Select Task Type</legend>
        <div className="form-check form-check-inline ml-3">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label className="form-check-label">Choice Task</label>
        </div>
        <div className="form-check form-check-inline ml-3">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label className="form-check-label">Decision-Making Task</label>
        </div>
        <div className="form-check form-check-inline ml-3">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label className="form-check-label">Sentence-Level Task</label>
        </div>
    </div></div>)
}

export default TaskType;