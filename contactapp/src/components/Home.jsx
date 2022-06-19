import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-right my-5">
                  <Link className='btn btn-outline-dark'>Add Contact</Link>
                </div>
                <div className="col-md-6 mx-auto">
                <h1>Contact App</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home