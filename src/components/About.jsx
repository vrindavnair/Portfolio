import React from "react";
// import Image from "react-bootstrap/esm/Image";
import "./Navbar.css"




    function About(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12"style={{height:'600px'}}>
                    <div className="row">
                        <div className="col-md-6">
                        <img src="about2.jpg" className='img-fluid' />
                           
                        </div>
                        <div className="col-md-6 c1" >
                            
                                <h1 style={{
                                    color:'#01fe87'
                                }}>About Me</h1>
                                <h3  >IAM A MODERN <p style={{color:"#C21E56",display:"inline-block"}}> WEB DESIGNER</p></h3>

                                <p style={{
                                   
                                }}>
                                    Iam a Web Developer.A recent post-graduate with a strong foundation<br />
                                    in web development technologies and a passion for full-stack development.
                                    I am excited to collaborate with a forward-thinking team, contribute to innovative projects,
                                    and continually learn and grow in a dynamic environment.My goal is to leverage  my education and enthusiasm to make meaningful contributions in web development while
                                        embracing best practices and staying current with industry trends. 
                                       
                                    </p>
               <p style={{color:'#E75480', fontStyle:'italic', marginTop:'20px'}}>Name :  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Vrinda V Nair   </p>
                <p style={{color:'#E75480', fontStyle:'italic'}}>Age :  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 24   </p>
                <p style={{color:'#E75480', fontStyle:'italic'}}>Address :  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Plamparambil House   </p>
                <p style={{color:'#E75480', fontStyle:'italic'}}>Contact Number :  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9544230744 </p>
                <p style={{color:'#E75480', fontStyle:'italic'}}>Email :  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 08vrindavnair@gmail.com </p>
                {/* <button className="btn btn-danger dlwcv">Download CV</button> */}
                                

                              
                            
                
                        </div>
                       
                       
                    </div>
                  
                      
                    
                </div>
            </div>
        </div>
                                )}


export default About;


