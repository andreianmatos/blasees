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

function Collage() {
    return(
        <div className='Collage'>
        
          <div className="Text">
            <Parallax 
              translateX={['-800px', '0px']}
              scale={[0.75, 1]}
              rotate={[-180, 0]}
              easing="easeInQuad"
              >
              <div className="textDiv" id="text1">a little thought</div>
            </Parallax>

            <Parallax 
              translateX={['100%', '-100%']}
              easing="easeInQuad"
            >
              <div className="textDiv" id="text2">another thought coming through</div>
            </Parallax>
          </div>

          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              display: "grid",
              gridAutoFlow: "column",
              overflow: "visible",
              gridTemplateColumns: "auto auto auto auto auto"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              style={{
                backgroundPositionY: "25%",
                transform: "scale(1.2)",
                position: "flex",
                filter: "blur(4px) brightness(25%)",
                backgroundSize: "auto",
                backgroundRepeat: "repeat",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden"
              }}
            />
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
              factorX={0.7}
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
              factorX={0.9}
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
              factorX={0.7}
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
    )
}

export default Collage;