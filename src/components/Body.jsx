import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Body.css"
import Image from 'react-bootstrap/esm/Image';
// import 'animate.css';

function Body() {

  return (

    <div className="container">
      <div className="row">

        <div className="col-md-12 a2">

          <div className="animate">
            <h1> HELLO !..<br /> IAM VRINDA V NAIR</h1></div>


          <h1 id='sf' data-text="SoftwareDeveloper...">SoftwareDeveloper...</h1>

          <button type='button' className='btn btn-danger' id='btn1'>Hire Me</button>

        </div>
       
      </div>
    </div>


  )
}

export default Body