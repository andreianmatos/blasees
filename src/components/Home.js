import { imageListClasses } from '@mui/material';
import '../App.css';
import React from 'react';
import { ReactP5Wrapper } from "react-p5-wrapper";

import selfPortrait from '../assets/about/selfPortrait.jpg'; 
import { CenterFocusStrong } from '@mui/icons-material';

function sketch(p5) {

  p5.setup = () => {
  }

  p5.draw = () => {

  }

  <ReactP5Wrapper sketch={sketch} />//THIS DOWN

}

function Home() {
    return(
        <div className='Home' id='home'
          style= {{
            height: "100%",
            position: "flex"
          }}
        >

          <div className='content'
            style= {{
              top: "30%"
            }}
          >
                      
            <div className ="textDiv" id="introText">
              <p><b> ANDREIA MATOS </b></p>
              <p> b. 1999 Portugal</p>
              <p><b> : </b></p>
              <p>
                <a id="linkedIn" href='https://www.linkedin.com/in/andreianmatos/' target="_blank"  rel="noreferrer">
                  <em>linkedin</em>&nbsp;&nbsp;
                </a>
                <a id="github" href='https://www.github.com/andreianmatos/' target="_blank"  rel="noreferrer">
                  <em>github</em>&nbsp;&nbsp;
                </a>
                <a id="instagram" href='https://www.instagram.com/blaseez/' target="_blank"  rel="noreferrer">
                  <em>instagram</em>&nbsp;&nbsp;
                </a>
                <a id="soundcloud" href='https://soundcloud.com/blasees' target="_blank"  rel="noreferrer">
                  <em>soundcloud</em>
                </a>
              </p>
            </div>

          </div>

          </div>

    )
}

export default Home;