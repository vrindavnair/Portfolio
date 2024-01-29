import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Navbar.css"


function ContactAs() {

return (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <h1 id='c1'> CONTACT AS</h1> </div>
    </div>
    <div className="row"  >
      <div className="col-md-2">
      </div>
      <div className="col-md-8" >
        <form>
        <div class="form-control" style={{backgroundColor:'rgb(77,241,162)'}}>
            <input type="text" className='form-control' placeholder='Name'  style={{backgroundColor:'rgb(55,233,194)'}}/>
          </div>
          <div class="form-control"style={{backgroundColor:'rgb(77,241,162)'}}>
            <input type="email"className='form-control' placeholder="Email"  style={{backgroundColor:'rgb(55,233,194)'}} />
          </div>
          <div class="form-control"style={{backgroundColor:'rgb(77,241,162)'}}>
            <input type="text" className='form-control' placeholder="Phone:No"  style={{backgroundColor:'rgb(55,233,194)'}}/>
          </div>
          <div class="form-control" style={{backgroundColor:'rgb(77,241,162)'}}>
            <input type="text" className='form-control' placeholder="Message"  style={{backgroundColor:'rgb(55,233,194)'}}/>
          </div>
        <button type='button' className='btn btn-danger'>contact me</button>

 
        </form>
      </div>
      <div className="col-md-2"></div>

    </div>

  </div>

)
}





export default ContactAs
