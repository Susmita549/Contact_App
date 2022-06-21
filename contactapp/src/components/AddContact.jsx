import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const contact = useSelector((state) => state);
  console.log(contact);
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contact.find(el=>el.email === email && email)
    const checkNumber = contact.find((el)=>el.number === parseInt(number))
    const checkName = contact.find(el=>el.name === name && name)
    if (!name || !number || !email) {
      return toast.warn("Please fill in all details");
    }
    if(checkEmail){
      return toast.error("This Email is already exists!!");
    }
    if(checkNumber){
      return toast.error("This Number is already exists!!");
    }
  
    if(checkName){
      return toast.error("This Name is already exists!!");
    }
    toast.warn("form successfully submited")
  };
  return (
    <div>
      <div className="container">
        <h1 className=" display-3 text text-center my-5">Add Contact</h1>
        <div className="row">
          <div className="col-md-6 mx-auto shadow p-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group p-2">
                <input
                  className="form-control"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
              <div className="form-group p-2">
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="form-group p-2">
                <input
                  className="form-control"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group p-2">
                <input
                  className="btn-block btn btn-dark col-12"
                  type="submit"
                  value="Add Contact"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
