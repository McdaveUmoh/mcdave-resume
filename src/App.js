import React, { Component } from 'react';
import Main from "./components/main";
import {Link} from "react-router-dom";
import "./App.style.scss";
import CV from "./components/image/curriculum vitae.pdf";

const FreeLancer = "{Free Lancer}"
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        menuOpen: true,
      };
    }

    hideToggle() {
      var selectorId = document.querySelector('.mdl-layout');
      selectorId.MaterialLayout.toggleDrawer();
  }

  render() { 
    
    return (
      <div className="scroll">
        {/*Always shows a header, even in smaller screens.*/}
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header ">
          <header className="mdl-layout__header header-color">
            <div className="mdl-layout__header-row">
              {/*Title*/}
              <Link className="mdl-navigation__link" to="/"><span className="mdl-layout-title">Mcdave Umoh {FreeLancer}</span></Link>
              {/*Add spacer, to align navigation to the right*/}
              <div className="mdl-layout-spacer"></div>
              {/*Navigation. We hide it in small screens.*/}
              <nav className="mdl-navigation mdl-layout--large-screen-only" >
                <Link className="mdl-navigation__link" to="/aboutme">About Me</Link>
                <Link className="mdl-navigation__link" to="/contact">Contact</Link>
                <Link className="mdl-navigation__link" to="/projects">Projects</Link>
                <Link className="mdl-navigation__link" to="/resume">Resume</Link>
                <a className="mdl-navigation__link" target="_blank" rel="noopener noreferrer" href={CV}>Download CV</a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer header-color" >
          <span className="mdl-layout-title"><Link className="mdl-navigation__link" onClick={() => this.hideToggle()} to="/">Mcdave Umoh</Link></span>
            <nav className="mdl-navigation">
              <Link className="mdl-navigation__link" onClick={() => this.hideToggle()} to="/aboutme">About &nbsp; Me</Link>
              <Link className="mdl-navigation__link" onClick={() => this.hideToggle()}  to="/contact">Contact</Link>
              <Link className="mdl-navigation__link" onClick={() => this.hideToggle()} to="/projects">Projects</Link>
              <Link className="mdl-navigation__link" onClick={() => this.hideToggle()} to="/resume">Resume</Link>
              <a className="mdl-navigation__link" onClick={() => this.hideToggle()} target="_blank" rel="noopener noreferrer" href={CV}>Download CV</a>
            </nav>
          </div>
          <main className="mdl-layout__content ">
            <div className="page-content">{/*Your content goes here*/}
              <Main/>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
