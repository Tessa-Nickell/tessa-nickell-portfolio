import React from 'react';
import '../css/Home.modules.css'
import Profile from '../icons/Profile.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import Resume from '../documents/Resume.pdf'

function Home(){
    return(
            <div className="page-contents">
                <section id="container" className="skewed">
                    <div className="layer top">
                        <div className="content-wrap">
                            <div className="content-body">
                                <h1 className="prof-name">Tessa Nickell</h1>
                                <p className="prof-description">
                                    Computer Systems Engineer,  finding a passion for web development
                                </p>
                                <Icons />
                            </div>
                        </div>
                    </div>

                    <div className="layer bottom">
                        <div className="content-wrap">
                            <div className="content-body"></div>
                            <img src={Profile} alt=""></img>
                        </div>
                    </div>
                    
                    <div className="handle"></div>
                </section>
            </div>
    );
}

function Icons(){
    return(
      <div className= "home-icons">
            <a href="https://github.com/Tessa-Nickell" target="_blank">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          <a href="https://www.instagram.com/tezzzuh/" target="_blank">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href={ Resume } target="_blank" download >
            <FontAwesomeIcon icon= { faFile }></FontAwesomeIcon>
          </a>
      </div>
    );
  }

// function scrollDown(){
//     return(

//     );
// }
export default Home;