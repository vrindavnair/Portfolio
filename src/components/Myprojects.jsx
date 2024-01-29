import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiSolidDonateBlood } from "react-icons/bi";
import { TbWriting } from "react-icons/tb";
import "./Navbar.css"

function Myprojects() {
  return (
    
      <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 height">
            <div className="col-md-12">
                    <h1 id='p1'>PROJECTS</h1>

                      </div>
                <div className="row">

                    <div className="col-md-6">
                    
                      <div className="card">
                        <h2 id='p2'><BiSolidDonateBlood style={{fontSize:'40px'}}/>BLOOD BANK MANAGEMENT SYSTEM</h2>

                        <p>Description: Developed a web-based Blood Donation Management System using Angular,
                           providing a user-friendly interface for blood banks, donors, and patients.
                            The system facilitates the efficient coordination of blood donations and requests,
                             ensuring the timely availability of blood units.<br />
                            <h4>Features</h4>
                          * User Registration and Authentication. <br/>
                          *	Donor Profile Management.<br/>
                            *	Blood Requests and Notifications.<br/>
                                *	Admin Dashboard.<br/>
</p>
                        </div>
                      

                    </div>
                    <div className="col-md-6">
                    

                      <div className="card">
                        <h2 id='p3'><TbWriting style={{fontSize:'30px'}}/>Handwritten Recognition using ANN and CNN using Python </h2>
                        <p>
                        Description: Designed and implemented a Handwritten Recognition System that utilizes 
                        Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN) for accurate and 
                        efficient recognition of handwritten characters. The system was integrated with a
                         Python Flask web application,providing users with an accessible and 
                         user-friendly interface.<br/>
                         <h4>Features</h4>
                         *	Hand written recognition is the process of converting images of handwritten
                          digital format.<br/>
                         *	The Aim of this project is to implement a classiﬁcation algorithm to recognize the
                              hand written digit and characters.<br/>
                         *	CNN is playing an important role in many sectors like image processing.<br/>

                        </p>
                        
                      </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Myprojects
