import React from 'react';
import './tracker.css'


function Tracker() {
    return (
        <div className="maincontainer">
            <div className="row">
                <div className="col-10 mx-auto col-md-8 mt-4">
                    <h3 className="text-capitalize text Center">Please Track Your Health Statistics Below</h3>
                </div>
            </div>
            <div className="cad card-body my-3">
                <form>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-dark text-black">
                            </div>

                        </div>
                        <input type="text" className="form-control" placeholder="Add an Item to Track" />
                    </div>



                    <button type="submit" className="btn  btn-success  btn-lg mt-3 ">Add Item</button>
                </form>
                <div>
                    <ul className="list-group my-5">
                        <h3 className="text-capitalize text-center">Tracked Items </h3>

                        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                            <h6>title</h6>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-danger btn-large mt-3  text-capitalize " >Clear List</button>
                </div>
            </div>


        </div >

    )
}
export default Tracker;