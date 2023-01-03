import '../App.css';
import React from 'react';
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import {Parallax} from "react-scroll-parallax";
import Carousel, { CarouselItem } from "./Carousel";

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
        <div className='Collage' id='collages'
          style= {{
            height: '100%;',
            position: "flex"
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

          <Carousel className='images'>
            <CarouselItem>                
              <img style={{
                maxHeight: "80vh;",
                maxWidth: "80vw;"
                }} 
                src={pol1} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img style={{
                maxHeight: "80vh;",
                maxWidth: "80vw;"
                }}  src={pol2} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img style={{
                maxHeight: "80vh;",
                maxWidth: "80vw;"
                }}  
                src={pol3} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img height="100%" src={pol4} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img height="100%" src={pol5} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img height="100%" src={pol6} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img height="100%" src={pol7} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img height="100%" src={pol8} alt="" />
            </CarouselItem>
            <CarouselItem>                
              <img height="100%" src={pol9} alt="" />
            </CarouselItem>
          </Carousel>

      </div>

    )
}

export default Collage;