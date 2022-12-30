import '../App.css';
import React from 'react';
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import {Parallax} from "react-scroll-parallax";

import pol1 from '../assets/collagePol/1.jpg'; 
import pol2 from '../assets/collagePol/2.jpg';
import pol3 from '../assets/collagePol/3.jpg';
import pol4 from '../assets/collagePol/4.jpg';
import pol5 from '../assets/collagePol/5.jpg';
import pol6 from '../assets/collagePol/6.jpg';
import pol7 from '../assets/collagePol/7.jpg'; 
import pol8 from '../assets/collagePol/8.jpg';
import pol9 from '../assets/collagePol/9.jpg';
import pol10 from '../assets/collagePol/10.jpg';
import pol11 from '../assets/collagePol/11.jpg';
import pol12 from '../assets/collagePol/12.jpg';
import pol13 from '../assets/collagePol/13.jpg';
import pol14 from '../assets/collagePol/14.jpg';
import { NoEncryption } from '@mui/icons-material';

var currentSection = false;

function showSection(chosenSection) {
  currentSection = chosenSection;
  document.getElementById('section1').style.display = "none";
  document.getElementById('section2').style.display = "none";
  document.getElementById(chosenSection).style.display = "block";
}

function Collage() {
    return(
        <div className='Collage' id='COLLAGES'
          style= {{
            height: '100%;',
            display: "none"
          }}
        >
          
          <div className='sections'>

              <span onClick="showSection('section1');">
                <em>i</em>&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              <span onClick="showSection('section2');">
                <em>ii</em>&nbsp;&nbsp;&nbsp;&nbsp;
              </span>

          </div>

          <div id='section1' styles={{display: "none;"}}>

            <MouseParallaxContainer
              className="parallaxImages overlap"
              containerStyle={{
                display: "grid",
                gridAutoFlow: "column",
                overflow: "visible",
              }}
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave
            >
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol1} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol2} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol3} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol4} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol5} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol6} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol7} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol8} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol9} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol10} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol11} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol12} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol13} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol14} alt="" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
        
        </div>

        <div id='section2' styles={{display: "none;"}}>

            <MouseParallaxContainer
              className="parallaxImages overlap"
              containerStyle={{
                display: "grid",
                gridAutoFlow: "column",
                overflow: "visible",
              }}
              globalFactorX={0.3}
              globalFactorY={0.3}
              resetOnLeave
            >
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol1} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol2} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol3} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol4} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol5} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  //filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol6} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol7} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol8} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol9} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol10} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol11} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol12} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol13} alt="" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.5}
                style={{
                  filter: "invert(1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%"
                }}
              >
                <img height="30%" src={pol14} alt="" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
        
        </div>
      
      </div>
    )
}

export default Collage;