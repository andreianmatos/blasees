import '../App.css';
import React from 'react';
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import {Parallax} from "react-scroll-parallax";

import draw1 from '../assets/drawings/1.jpg'; 
import draw2 from '../assets/drawings/2.jpg';
import draw3 from '../assets/drawings/3.jpg';
import draw4 from '../assets/drawings/4.jpg';
import draw5 from '../assets/drawings/5.jpg';
import draw6 from '../assets/drawings/6.jpg';
import draw7 from '../assets/drawings/7.jpg'; 
import draw8 from '../assets/drawings/8.jpg';
import draw9 from '../assets/drawings/9.jpg';

function showSection(chosenSection) {
  document.getElementById("sectionbutton1").style.color = "black";
  document.getElementById("sectionbutton2").style.color = "black";
  document.getElementsByClassName("parallax drawing")[0].style.display = "none";
  document.getElementById("sectionbutton"+chosenSection).style.color = "darkred";
  document.getElementsByClassName("parallax drawing")[chosenSection-1].style.display = "grid";
}

function Drawings() {
    return(
        <div className='Drawings' id='DRAWINGS'
          style= {{
            height: '100%;',
            display: "none"
          }}
        >
          
        <div className='sections'>

              <button id="sectionbutton1" onClick={() => showSection(1)}>
                <em>all</em>&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button id="sectionbutton2" onClick={() => showSection(2)}>
                <em>flowers</em>&nbsp;&nbsp;&nbsp;&nbsp;
              </button>

          </div>

          <div className='images'>

            <MouseParallaxContainer
              className="parallax drawing"
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
                <img height="10%" src={draw1} alt="" />
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
                <img height="10%" src={draw2} alt="" />
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
                <img height="10%" src={draw3} alt="" />
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
                <img height="10%" src={draw4} alt="" />
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
                <img height="10%" src={draw5} alt="" />
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
                <img height="10%" src={draw6} alt="" />
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
                <img height="10%" src={draw7} alt="" />
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
                <img height="10%" src={draw8} alt="" />
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
                <img height="10%" src={draw9} alt="" />
              </MouseParallaxChild>

            </MouseParallaxContainer>
              
      </div>
      </div>

    )
}

export default Drawings;