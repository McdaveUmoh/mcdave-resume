import React, {Component} from 'react';
import DaveTechk from './image/davetechk.png';
import Gadgets from './image/gadgets.png';
import WordaAlive from './image/wac.png';
import Jobtaska from './image/jobtaska.png';
import Mines from './image/mines.png';
import Cstemp from './image/cstemp.png';
import Dozie from './image/dozie.png';
import KitchenStuff from './image/kitchenstuff.png';
import Urban from './image/urban.png';
import KitchenApp from './image/kitchenapp.jpeg';
import Gadget from './image/gadget.png';
import Mine from './image/mine.jpg';
import Study from './image/study.png';
import muni from './image/muni.png';
import wordalive from './image/wordalive.png';
import hama from './image/hama.jpg';
import allocentricravels from './image/allocentric ravels.jpeg';
import allocntricstor from './image/allocntricstor.jpeg';
import bob from './image/bob.jpeg';
import bobby from './image/bobby.jpeg';
import gadget from './image/gadget.png';
import akin from './image/akin.jpeg';
import lividgreat from './image/lividgreat.png';
import livid from './image/livid.png';
import busco from './image/busco.jpeg';
import hama1 from './image/hama1.png';
import were from './image/were.png';
import jonas from './image/Jonas1.png';
import allo from './image/Allocentric_Travels.png';
import tailorsng from './image/tailorsng.jpeg';

export default class Projects extends Component{
    
    render(){
    
        return(
            <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div class="mdl-tabs__tab-bar">
                    <a href="#starks-panel" class="mdl-tabs__tab is-active">Web Apps</a>
                    <a href="#targaryens-panel" class="mdl-tabs__tab">Graphic Designs</a>
                    <a href="#lannisters-panel" class="mdl-tabs__tab">Mobile/Desktop applications</a>
                </div>

                <div class="mdl-tabs__panel is-active" id="starks-panel">

                    <h2 style={{textAlign:'center',fontFamily: 'Anton sans-serif', paddingTop: '0.1em', paddingBottom: '0em'}}>Web Apps</h2>
                
                    {/**#1 */}
                    <div class="mdl-grid projects-form ">
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class=" shadow">
                                    <img src={Mines} alt="web img" width="100%" height="100%"/><br/>
                                        <p>The Ministry of Mines and Steel Development is an agency set up to unlock the economic potentials of the solid minerals sub-sector in Nigeria.</p>
                                        <a href="http://www.minesandsteel.gov.ng/" target="_blank" rel="noopener noreferrer" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>

                            {/**#2 */}
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class=" shadow">
                                    <img src={Gadgets} alt="web img" width="100%" height="100%"/><br/>
                                        <p>GadgetsNest Your one stop Gadgets Haven. Quality Guarantee of products. Fast returnings program. No additional fees</p>
                                        <a href="https://gadgetsnest.org/" target="_blank" rel="noopener noreferrer" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>

                            {/**#3 */}
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class=" shadow">
                                    <img src={WordaAlive} alt="web img" width="100%" height="100%"/><br/>
                                        <p>With a passion and zeal for the lost and hurting world, our church is looking for ways to build bridges to a cynical and jaded society.</p>
                                        <a href="https://wordalivecenter.org/" target="_blank" rel="noopener noreferrer" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>
                    </div>

                    {/**#4 */}
                    <div class="mdl-grid projects-form ">
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class=" shadow">
                                    <img src={Jobtaska} alt="web img" width="100%" height="100%"/><br/>
                                        <p>We don't just provide you with taskas for your jobs, we provide you with the Best professionals! in your area.</p>
                                        <a href="http://jobtaska.com/" target="_blank" rel="noopener noreferrer" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>

                            {/**#5*/}
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class=" shadow">
                                    <img src={Urban} alt="web img" width="100%" height="100%"/><br/>
                                        <p>Buy foodstuffs in Bulk for Cheaper Rates, <br/> With a Token for delivery fee..</p>
                                        <a href="https://urbanmarketstore.com/" target="_blank" rel="noopener noreferrer" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>

                            {/**#6 */}
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class=" shadow">
                                    <img src={Cstemp} alt="web img" width="100%" height="100%"/><br/>
                                        <p>Learn the skills. Practice the construction trade. Take steps to build your future and fortune, Entrepreneurs and contractors..</p>
                                        <a href="http://cstemp.org/" target="_blank" rel="noopener noreferrer" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>
                    </div>

                    {/**#7 */}
                    <div class="mdl-grid projects-form ">
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class=" shadow">
                                    <img src={Dozie} alt="web img" width="100%" height="100%"/><br/>
                                        <p>Your One Stop For Approved NAFDAC Drugs, at affordable Prices, What are you waiting For Visit Us Now!!! </p>
                                        <a href="http://dozieanddoziespharm.com.ng/" target="_blank" rel="noopener noreferrer" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>

                            {/**#8*/}
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class="shadow">
                                    <img src={KitchenStuff} alt="web img" width="100%" height="100%"/><br/>
                                        <p>KitchenStuffs is an online retail platform of FRONTCAS NIGERIA LIMITED (FNL) that specializes in sales of foodstuffs. </p>
                                        <a href="https://kitchenstuffs.org/" target="_blank" rel="noopener noreferrer"  class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>

                            {/**#9 */}
                            <div class="mdl-cell mdl-cell--4-col space">
                                <div class="shadow">
                                    <img src={Study} alt="web img" width="100%" height="100%"/><br/>
                                        <p>StudyLab helps schools improve students' performance in Maths and Science subjects to world class standards.</p>
                                        <a href="http://www.studylab360.com/#/" target="_blank" rel="noopener noreferrer"  class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>
                            </div>
                    </div>

                    {/**#7 */}
                    <div class="mdl-grid projects-form ">
                        <div class="mdl-cell mdl-cell--4-col space"/>
                        <div class="mdl-cell mdl-cell--4-col space">
                                <div class="shadow">
                                    <img src={DaveTechk} alt="web img" width="100%" height="100%"/><br/>
                                        <p>Skilled in web applications, graphics design, animation advertisement, mobile development and a whole lot more.</p>
                                        <a href="http://davetechk.com.ng/" target="_blank" rel="noopener noreferrer"  class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect ">
                                            Go To WebSite
                                        </a>
                                </div>  
                        </div>
                        <div class="mdl-cell mdl-cell--4-col space"/>
                    </div>


                </div>


                <div class="mdl-tabs__panel" id="lannisters-panel">
                    <h2 style={{textAlign:'center',fontFamily: 'Anton sans-serif', paddingTop: '0.1em', paddingBottom: '0em'}}>Applications</h2>
                    <div class="mdl-grid">
                        <div class="mdl-cell mdl-cell--12-col ">
                            {/**#7 */}
                            <div class="mdl-grid projects-form ">
                                    <div class="mdl-cell mdl-cell--4-col space">
                                        <div class="shadow">
                                            <img src={KitchenApp} alt="web img" width="100%" height="100%"/><br/>
                                                <p>An E-commerce App To help users purchase kitchen Equipments on android devices.</p>
                                        </div>
                                    </div>

                                    {/**#8*/}
                                    <div class="mdl-cell mdl-cell--4-col space">
                                        <div class="shadow">
                                            <img src={Gadget} alt="web img" width="100%" height="100%"/><br/>
                                                <p>Coming Soon.</p>
                                        </div>
                                    </div>

                                    {/**#9 */}
                                    <div class="mdl-cell mdl-cell--4-col space">
                                        <div class="shadow">
                                            <img src={Mine} alt="web img" width="100%" height="100%"/><br/>
                                                <p>Desktop App in-House For ministry to aid issuing certifiacte.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mdl-tabs__panel" id="targaryens-panel">
                    <h2 style={{textAlign:'center',fontFamily: 'Anton sans-serif', paddingTop: '0.1em', paddingBottom: '0em'}}>Designs</h2>
                    <div class="mdl-grid">
                        
                        <div class="mdl-cell mdl-cell--12-col" style={{textAlign:'center'}}>
                            <img src={allocentricravels} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={hama1} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={wordalive} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={allocntricstor} style={{padding: '15px'}}  alt="web img" width="300px" height="300px"/>
                            <img src={were} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={bob} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={gadget} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={bobby} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={akin} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={busco} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={lividgreat} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={muni} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={jonas} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={livid} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={allo} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={hama} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>
                            <img src={tailorsng} style={{padding: '15px'}} alt="web img" width="300px" height="300px"/>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default Resume;