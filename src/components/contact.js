import React, {Component} from 'react';
import Mcdave from './image/mac1.jpg';

export default class contact extends Component{
    render(){
        return(
            <div className="contact-body body-scroll">
                <div class="mdl-grid projects-form contact-grid">
                    <div class="mdl-cell mdl-cell--6-col" >
                        <div style={{width: '80%'}}>
                            <h2>Mcdave C. Umoh</h2>
                            <img
                                src={Mcdave}
                                alt="Avatar"
                                style={{height: '250px', width: '80%'}}
                            />
                            <p style={{width: '75%', margin: 'auto', paddingTop: '2em'}}>
                            I am an exceptional leader, possess excellent written and verbal communication and interpersonal skills. I am
                            technically savvy and adept in computer programming, graphics design, internet research, adobe package, web and
                            applications development. I am always punctual and I get the job done by any means. I also possess outstanding
                            relationship building, training and presentation skills.
                            </p>
                        </div>


                    </div>

                    <div class="mdl-cell mdl-cell--6-col" >
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <ul class="demo-list-icon mdl-list">

                                <li class="mdl-list__item">
                                    <span class="mdl-list__item-primary-content" style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        &nbsp; &nbsp; (+234) 903-917-7766
                                    </span>
                                </li>

                                <li class="mdl-list__item">
                                    <span class="mdl-list__item-primary-content" style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>
                                        &nbsp; &nbsp; (+234) 909-366-7246
                                    </span>
                                </li>

                                <li class="mdl-list__item">
                                    <span class="mdl-list__item-primary-content" style={{fontSize: '18px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        &nbsp; &nbsp; mcdave@davetechk.com.ng
                                    </span>
                                </li>

                                <li class="mdl-list__item">
                                    <span class="mdl-list__item-primary-content" style={{fontSize: '20px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"/>
                                        &nbsp; &nbsp; mcdaveumoh
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Resume;