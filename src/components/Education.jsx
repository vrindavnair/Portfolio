import React from 'react'
import { FaUserGraduate } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { BiSolidCertification } from "react-icons/bi";



function Education() {
    return (
        <div className="container-fluid">
            <div className="row" style={{ backgroundColor:'rgb(190,225,230)'}}>
                <div className="col-md-12">
                    <h1 style={{ display: 'flex', justifyContent: 'center', color: '#ff1361' }}> Education</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <p>
                                    <h4 style={{ color: 'blueviolet' }}><FaUserGraduate style={{ color: 'black' }
                                    } />
                                        Master of Computer Application (MCA)</h4>
                                    <h5 style={{ color: 'brown' }}>[2020 – 2022]</h5>

                                    School of Technology and Applied Sciences Pullarikunnu (STAS), Kottayam.<br />
                                    CGPA: 7.79<br />
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <h4 style={{ color: 'blueviolet' }}> <FaGraduationCap style={{ color: 'black' }} />  Bachelor’s in Computer Application

                                </h4>
                                <h5 style={{ color: 'brown' }}>[2017 – 2020]</h5>


                                <p>Bishop Valiyil Memorial holy cross college(BVM) , Cherpunkal, Pala<br />
                                    C Grade<br />

                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">

                                <p><h4 style={{ color: 'blueviolet' }}><IoSchoolOutline style={{ color: 'black' }} />Plus Two</h4>
                                    <h5 style={{ color: 'brown' }}>[2015-2017]</h5>

                                    NSS HSS Karapuzha , Kottayam<br />

                                    73% <br />

                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <p><h4 style={{ color: 'blueviolet' }}><LiaSchoolSolid style={{ color: 'black' }} />SSLC</h4>
                                    <h5 style={{ color: 'brown' }}>[2014-2015]</h5>

                                    Sree Vidhyadi Raja public school, Nattasery<br />

                                    70%<br />

                                </p>

                            </div>
                        </div>
                    </div>
                </div>























                <div className="col-md-12">
                    <h1 style={{ display: 'flex', justifyContent: 'center', color: '#ff1361' }}> Certifications</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <p>
                                    <h4 style={{ color: 'blueviolet' }}><BiSolidCertification style={{ color: 'black' }} /> NPTEL Certification in cloud computing</h4>
                                    <h5 style={{ color: 'brown' }}>[2022]</h5>

                                    Simply put, cloud computing is the delivery of computing services—including servers,
                                    storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”)
                                    to offer faster innovation, flexible resources, and economies of scale.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <h4 style={{ color: 'blueviolet' }}><BiSolidCertification style={{ color: 'black' }} />  IT Administration Certification
                                </h4>
                                <h5 style={{ color: 'brown' }}>[2021]</h5>

                                IT administrators, also known as system administrators , configure and maintain
                                a company's computers, servers, networks, enterprise software and security systems.
                                They also optimize internal IT infrastructure for greater productivity
                                and help the company stay compliant with cybersecurity regulations.

                                <p>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Education
