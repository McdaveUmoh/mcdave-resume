import React, {Component} from 'react';
import "./aboutme.style.scss";
import {Link} from "react-router-dom";
import dp from './image/mac2.jpg';
import dp1 from './image/mac5.jpg';
import dp2 from './image/mac4.jpg';
import dp3 from './image/mac3.jpg';

class AboutMe extends Component{
  render(){
      const slogan= "<I Am A Programmer I have no Life/> ";
    return(
      <div className="example" style={{width: '100%', height: '100%'}} >
        <div className="desktop-only">
            <div className="main">
                <div class="color-box divi article-image">
                    <div class="content divi" style={{color: "white"}}>
                        <h1>Professional Career</h1>
                        <p>I focus Primarily on Front-End development and UI Design With a 3 years experience,
                        vast in a handful programming languages & Frame Works i.e (React & React Native).
                        i started my own free lance company in 2018 DaveTechk, developing Applications,
                        Design as well as animmation for Start-Up Companies & Government bodies Over the Past 
                        Year, For More details Please See My Project Section For Upcoming and Completed Projects &nbsp;
                        
                        <Link to="/projects">Projects</Link> </p>
                    </div>
                </div>
                
                <div class="color-box divi article-image2" style={{backgroundColor: "darkgreen"}}>
                    <div class="content divi" style={{color: "black"}}>
                        <h1>Hobbies</h1>
                        <p>I think programming is the only hobby i have :) LOL ,
                            When I'm not programming i sketch, Paly Basket Ball, Sing,
                            Learn New Stuffs, But most of the time I'm developing {slogan} </p>
                    </div>
                </div>
                
                <div class="color-box divi article-image3" style={{backgroundColor: "yellow"}}>
                    <div class="content divi" style={{color: "#FDFEFE"}}>
                        <h1>Top Quotes</h1>
                        <p>“Without requirements or design, programming is the art of adding bugs to an empty text file.” - Louis Srygley</p>
                        <p style={{color: "white", backgroundColor: "#90CAF9", opacity: '0.8'}}>"Theory is when you know something, but it doesn’t work. Practice is when something works, but you don’t know why. Programmers combine theory and practice: Nothing works and they don’t know why." - Unknown</p>
                        <p>“It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!” - Uncle Bob</p>
                    </div>
                </div>
                
                <div class="color-box divi article-image4" style={{backgroundColor: "blue"}}>
                    <div class="content divi">
                        <h1>Vision</h1>
                        <p>To see my Country on top the food chain in technology, to see a great percent of youths indulged in various branches 
                            of computer science and using their knowledge to help resolve top african crisis. I believe we can get here but it 
                            takes the help of every abled software/hardware Engineer to try an incooperate this idea where they may find themselves,
                            motivating the younger ones to invest their time in ICT to better themselves and the country at large.  </p>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="mobile-only">
            <div>
                <p style={{fontSize:'20px', fontWeight: 'Bold'}}>Professional Career</p>
                <p style={{fontWeight: 'Bold'}}>I focus Primarily on Front-End development and UI Design With a 3 years experience,
                    vast in a handful programming languages & Frame Works i.e (React & React Native).
                    i started my own free lance company in 2018 DaveTechk, developing Applications,
                    Design as well as animmation for Start-Up Companies & Government bodies Over the Past 
                    Year, For More details Please See My Project Section For Upcoming and Completed Projects &nbsp;
                        
                        <Link to="/projects">Projects</Link> </p>
                <img alt="avatar" src={dp}/>
            </div>
            <div>
                <p style={{fontSize:'20px',fontWeight: 'Bold',color: 'white'}}>Hobbies</p>
                <p style={{fontWeight: 'Bold',color: 'white'}}>I think programming is the only hobby i have :) LOL ,
                    When I'm not programming i sketch, Paly Basket Ball, Sing,
                    Learn New Stuffs, But most of the time I'm developing <br/> {slogan} </p>
                <img alt="avatar" src={dp1}/>
            </div>
            <div>
                <p style={{fontSize:'20px',fontWeight: 'Bold',color: 'white'}}>Top Quotes</p>
                
                <p style={{color: "white",fontWeight: 'Bold'}}>“Without requirements or design, programming is the art of adding bugs to an empty text file.” &nbsp; - Louis Srygley<br/>
                "Theory is when you know something, but it doesn’t work. Practice is when something works, but you don’t know why. Programmers combine theory and practice: Nothing works and they don’t know why." - Unknown</p>
                <img alt="avatar" src={dp2}/>
            </div>
            <div>
                <p style={{fontSize:'20px',fontWeight: 'Bold'}}>Vision</p>
                <p style={{fontWeight: 'Bold',color: 'black'}}>To see my Country on top the food chain in technology, to see a great percent of youths indulged in various branches 
                            of computer science and using their knowledge to help resolve top african crisis. I believe we can get here but it 
                            takes the help of every abled software/hardware Engineer to try an incooperate this idea where they may find themselves,
                            motivating the younger ones to invest their time in ICT to better themselves and the country at large.</p>
                <img alt="avatar" src={dp3}/>
            </div>
        </div>
      </div>    
    );
  }
  
}

export default AboutMe;