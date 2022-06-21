import React from "react";
import { Link,useParams } from "react-router-dom";

const EditContact = () => {
    const {id} = useParams()
  return (
    <>
      <div className="container">
        <h1 className=" display-3 text text-center my-5">Edit Contact - {id}</h1>
        <div className="row">
          <div className="col-md-6 mx-auto shadow p-5">
            <form>
              <div className="form-group p-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="form-group p-2">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group p-2">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group p-2">
                <input
                  className=" btn btn-dark "
                  type="submit"
                  value="Add Contact"
                />
                <Link className='btn btn-danger mx-3' to='/'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContact;
