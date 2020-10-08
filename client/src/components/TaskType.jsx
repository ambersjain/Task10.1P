import React from 'react';


const TaskType = (props) => {
    return (<div className="container-fluid">
        <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Select Task Type</legend>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input"
                    type={props.type}
                    name={props.name1}
                    value={props.value1}
                    checked={props.radio === props.value1}
                    onChange={props.onChange}
                    onClick={props.onChange2}
                />
                <label className="form-check-label">Choice Task</label>
            </div>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input"
                    type={props.type}
                    name={props.name2}
                    value={props.value2}
                    checked={props.radio === props.value2}
                    onChange={props.onChange}
                    onClick={props.onChange2}
                />
                <label className="form-check-label">Decision-Making Task</label>
            </div>
            <div className="form-check form-check-inline ml-3">
                <input className="form-check-input"
                    type={props.type}
                    name={props.name3}
                    value={props.value3}
                    checked={props.radio === props.value3}
                    onChange={props.onChange}
                    onClick={props.onChange2}
                />
                <label className="form-check-label">Sentence-Level Task</label>
            </div>
        </div></div>)
}

export default TaskType;