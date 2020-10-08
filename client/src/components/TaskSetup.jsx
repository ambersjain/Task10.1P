import React from 'react';


function Decision(props) {
    if (props.qType === "decision") {
        return <div className="form-group row">
            <label className="col-form-label col-sm-2">Do you understand Data Structures?</label>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label">No</label>
            </div>
        </div>;
    }
    return '';
}

function Sentence(props) {
    if (props.qType === "sentence") {
        return <div className="form-group row">
            <label className="col-sm-2 col-form-label">Tell one difference between the Map and Object?</label>
            <div className="col-sm-5">
                <input type="text" className="form-control" id="inputEmail3" placeholder="Start typing.." />
            </div>
        </div>;
    }
    return '';
}

function Choice(props) {
    if (props.qType === "choice") {
        return <div className="form-group row">
            <label className="col-form-label col-sm-2">As a worker, what are you an expert in?</label>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                <label className="form-check-label">C++</label>
            </div>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label">Java</label>
            </div>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                <label className="form-check-label">Python</label>
            </div>
        </div>
    }
    return '';
}

const TaskSetup = (props) => {

    return (<div className="container-fluid">
        <div className="shadow-none pt-2 pb-2 mt-4 mb-2 bg-light"><h3>Setting up your Task</h3></div>
        <div className="form">
            <h1>{props.radio}</h1>
            <div className="form">
                <Choice qType={props.option} />
                <Decision qType={props.option} />
                <Sentence qType={props.option} />
            </div>
        </div>
    </div>)
}

export default TaskSetup;