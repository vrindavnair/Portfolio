import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navbar.css"


function ContactAs() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 id='c1'> CONTACT AS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <form class="row g-3">
    <div class="col-auto">
       <input type="text"  className="form-control"  placeholder='Name'style={{marginLeft:'60px'}} />
    </div>
    <div class="col-auto">
      <input type="email" className="form-control"  placeholder="Email" style={{marginLeft:'70px'}}/>
    </div>
    <div class="col-auto">
      <input type="text" className="form-control"  placeholder="Subject" style={{marginLeft:'80px'}}/><br/>
    </div><br/>
    <div className="col-auto">
      <textarea className='form-control' placeholder='message'></textarea>
      <button className='btn btn-danger' id='sendmesg'>Send message</button>
    </div>
    

   
  </form>


        </div>
      </div>
    </div>
   
  )
}

export default ContactAs
