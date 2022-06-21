import React from 'react'

const AddContact = () => {
  return (
    <div>
         <div className="container">
         <h1 className=" display-3 text text-center my-5">
                 Add Contact
                </h1>
            <div className="row">
              
                <div className="col-md-6 mx-auto shadow p-5">
                <form >
                  <div className="form-group p-2">
                    <input className='form-control'  type="text" placeholder='Name' />
                  </div>
                  <div className="form-group p-2">
                    <input className='form-control'  type="email" placeholder='Email' />
                  </div>
                  <div className="form-group p-2">
                    <input className='form-control'  type="number" placeholder='Phone Number' />
                  </div>
                  <div className="form-group p-2">
                    <input className='btn-block btn btn-dark col-12' type="submit" value='Add Contact' />
                  </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddContact