import React, {Component} from 'react';
import Mcdave from "../components/image/mac5.jpg";
import Education from "./education";
import Experience from "./experience";
import {Link} from "react-router-dom";
import Skills from "./skills";
import mcdavename from './image/mcdavename.jpeg';

export default class Resume extends Component{
    render(){
        return(
            <div style={{width: '100%', height: '100%'}}>
               <div class="mdl-grid">
                    <div class="mdl-cell mdl-cell--4-col resume-left">
                        <div style={{textAlign: 'center'}} >
                            <img
                                src={Mcdave}
                                alt="avatar"
                                className="avatar-img"
                                style={{height:'100%', width:'100%'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '1em'}}>Mcdave C. Umoh</h2>
                        <h4 style={{color: 'grey'}}>programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <p>
                        I focus Primarily on Front-End development and UI Design With a 3 years experience,
                        vast in a handful programming languages & Frame Works i.e (React & React Native).
                        i started my own free lance company in 2018 DaveTechk, developing Applications,
                        Design as well as animmation for Start-Up Companies & Government bodies Over the Past 
                        Year, For More details Please See My Project Section For Upcoming and Completed Projects
                        </p>
                        <Link to="/projects">Projects</Link>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <h4>Phone</h4>
                        <p>(+234) 909 3664 276</p>
                        <h4>Email</h4>
                        <p>mcdave@davetechk.com.ng</p>
                        <h4>Address</h4>
                        <p>
                            opp lion share bakery, channel 8, Kubwa - Abuja.
                        </p>
                        <h5>Web</h5>
                        <p>www.davetechk.com.ng</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>

                    </div>


                    <div class="mdl-cell mdl-cell--8-col resume-right">
                        <div style={{textAlign: 'center'}}>
                            <img
                            src={mcdavename}
                            alt="avatar"
                            style={{height:'160px', width: '280px', opacity: '0.3'}}
                            />
                        </div>
                        <h2>Education</h2>
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="University Of Lagos"
                            schoolDescription="A First Class in BSc. Software development engineering."
                        />
                        <Education
                            startYear={2010}
                            endYear={2013}
                            schoolName="Government Secondary School"
                            schoolDescription="Senior Secondary School Certificate (SSCE) WAEC & NECO
                            Government Secondary School GAWU, Niger State, Nigeria."
                        />
                        <Education
                            startYear={2006}
                            endYear={2010}
                            schoolName="Evangel Academy"
                            schoolDescription="Federal School leaving School Certificate, Abuja Nigeria.."
                        />
                        <hr style={{borderTop:'3px solid #e22947', width: '85%'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear={2015}
                            endYear={2015}
                            jobName="Emi Systems ltd"
                            jobDescription="Worked as INTERN where i 
                            Worked directly with the IT department in maintaining the company’s website and network management,
                            Performed installation of CCTV cameras and alarm systems,
                            Assisted in Creating a database for storing information online via sql,
                            Represented the organization to customers, the public, government officials and other external sources."
                        />
                        <Experience
                            startYear={2016}
                            endYear={2016}
                            jobName="The Orb"
                            jobDescription="Worked with a Group of programming experts in creating and launching websites for institutions,
                            Taught HTML to young developers."
                        />
                        <Experience
                            startYear={2016}
                            endYear={2016}
                            jobName="Neptune Atlantic"
                            jobDescription=" Designed web applications and business branding, Managed the ISP provider for the Company."
                        />
                        <Experience
                            startYear={2016}
                            endYear={2016}
                            jobName="Eco bank Benin Republic"
                            jobDescription=" Helped out with Graphics design, Assisted my superiors with daily maintenance routine, Went on assignments with my supervisor."
                        />
                        <hr style={{borderTop:'3px solid #e22947', width: '85%'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill="JavaScript"
                            percent={65}
                        />
                        <Skills
                            skill="MySQL,"
                            percent={80}
                        />
                        <Skills
                            skill="PHP,"
                            percent={45}
                        />
                        <Skills
                            skill="2D Video animation"
                            percent={100}
                        />
                        <Skills
                            skill="React Web"
                            percent={77}
                        />
                        <Skills
                            skill="React Native"
                            percent={68}
                        />
                        <Skills
                            skill="WordPress"
                            percent={96}
                        />
                        <Skills
                            skill="GraphQL"
                            percent={45}
                        />
                        <Skills
                            skill="HTML/CSS"
                            percent={90}
                        />
                        <Skills
                            skill="Graphics Design"
                            percent={95}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

// export default Resume;