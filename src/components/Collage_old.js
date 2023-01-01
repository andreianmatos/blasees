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

function showSection(chosenSection) {
  document.getElementById("sectionbutton1").style.color = "black";
  document.getElementById("sectionbutton2").style.color = "black";
  document.getElementsByClassName("parallax collage")[0].style.display = "none";
  document.getElementsByClassName("parallax collage")[1].style.display = "none";
  document.getElementById("sectionbutton"+chosenSection).style.color = "darkred";
  document.getElementsByClassName("parallax collage")[chosenSection-1].style.display = "grid";
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

              <button id="sectionbutton1" onClick={() => showSection(1)}>
                <em>One</em>&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button id="sectionbutton2" onClick={() => showSection(2)}>
                <em>Two</em>&nbsp;&nbsp;&nbsp;&nbsp;
              </button>

          </div>

          <div className='images'>

            <MouseParallaxContainer
              className="parallax collage"
              containerStyle={{
                display: "none",
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
                  height: "100%",
                }}
              >
                <img height="50%" src={pol1} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol2} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol3} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol4} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol5} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol6} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol7} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol8} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol9} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol10} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol11} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol12} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol13} alt="" />
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
                  height: "100%",
                  marginLeft:"100%"
                }}
              >
                <img height="50%" src={pol14} alt="" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
        
            <MouseParallaxContainer
              className="parallax collage"
              containerStyle={{
                display: "none",
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
                <img height="50%" src={pol1} alt="" />
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
                <img height="50%" src={pol2} alt="" />
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
                <img height="50%" src={pol3} alt="" />
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
                <img height="50%" src={pol4} alt="" />
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
                <img height="50%" src={pol5} alt="" />
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
                <img height="50%" src={pol6} alt="" />
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
                <img height="50%" src={pol7} alt="" />
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
                <img height="50%" src={pol8} alt="" />
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
                <img height="50%" src={pol9} alt="" />
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
                <img height="50%" src={pol10} alt="" />
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
                <img height="50%" src={pol11} alt="" />
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
                <img height="50%" src={pol12} alt="" />
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
                <img height="50%" src={pol13} alt="" />
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
                <img height="50%" src={pol14} alt="" />
              </MouseParallaxChild>
            </MouseParallaxContainer>
              
      </div>
      </div>

    )
}

export default Collage;