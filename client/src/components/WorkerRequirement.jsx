import React from 'react';


const WorkerRequirement = () => {
    return (<div className="container-fluid">
        <div className="shadow-none pt-2 pb-2 mt-4 mb-2 bg-light"><h3>Worker Requirement</h3></div>
        <div className="form">
        <div className="form-group row">
                <label className="col-form-label col-sm-2">Require Master Workers</label>
                <div className="form-check form-check-inline ml-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check form-check-inline ml-3">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label">No</label>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputEmail3" placeholder="Enter task title" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="inputPassword3" placeholder="Enter task description" />
                </div>
            </div>

        </div>
    </div>)
}

export default WorkerRequirement;