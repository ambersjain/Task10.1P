import React from 'react';


const TaskSetup = () => {
    return (<div className="container-fluid">
        <div className="shadow-none pt-2 pb-2 mt-4 mb-2 bg-light"><h3>Setting up your Task</h3></div>
        <div className="form">
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
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">Expiry Date</label>
                <div className="col-sm-2">
                    <input type="date" name="expiry_date" max="3000-12-31" min="1000-01-01" className="form-control" />
                </div>
            </div>
        </div>
    </div>)
}

export default TaskSetup;