import React, {Component} from 'react';
import Mcdave from "../components/image/mac1.jpg"

export default class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <div class="mdl-grid landing-page">
                    <div class="mdl-cell mdl-cell--12-col space rain">
                        <img
                            src={Mcdave}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <div style={{width: '100%'}}>
                                <h1> Front-End Web/Native Developer</h1>

                                <hr/>

                                <p> React | React Native | NodeJS | FireBase | GraphQL | HTML5/CSS | PhotoShop | JavaScript | Maya </p>
                                
                                <div className="social-links">

                                    {/*Linkedin*/}
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>

                                    {/*Github*/}
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                    {/*Facebook*/}
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-facebook-square" aria-hidden="true" />
                                    </a>

                                    {/*instagram*/}
                                    <a href="/" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Resume;