import '../App.css';
import React from 'react';

import { Gallery } from "react-grid-gallery";

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

import shade1 from '../assets/shade/1.jpg'; 
import shade2 from '../assets/shade/2.jpg'; 
import shade3 from '../assets/shade/3.jpg'; 


function showSection(chosenSection) {
  document.getElementById("sectionbutton1").style.color = "black";
  document.getElementById("sectionbutton2").style.color = "black";
  document.getElementById("sectionbutton3").style.color = "black";
  for (let i = 0; i < document.getElementsByClassName("gallery-container").length; i++) {
    document.getElementsByClassName("gallery-container")[i].style.display = "none";
  }
  document.getElementById("sectionbutton"+chosenSection).style.color = "darkred";
  document.getElementsByClassName("gallery-container")[chosenSection-1].style.display = "grid";
}

function Collage() {

    const images1 = [
        {
          src: pol1,
          width: 500,
          height: 500,
        },
        {
            src: pol2,
            width: 500,
            height: 500,
        },
        {
            src: pol3,
            width: 500,
            height: 500,
        },
        {
            src: pol4,
            width: 500,
            height: 500,
        },
        {
            src: pol5,
            width: 500,
            height: 500,
        },
        {
            src: pol1,
            width: 500,
            height: 500,
        },
        {
            src: pol2,
            width: 500,
            height: 500,
        },
        {
            src: pol3,
            width: 500,
            height: 500,
        },
        {
            src: pol4,
            width: 500,
            height: 500,
        },
        {
            src: pol5,
            width: 500,
            height: 500,
        },
      ];
  
      const images2 = [
        {
            src: shade1,
            width: 500,
            height: 500,
          },
          {
              src: shade2,
              width: 500,
              height: 500,
          },
          {
              src: shade3,
              width: 500,
              height: 500,
          },
          {
              src: pol4,
              width: 500,
              height: 500,
          },
          {
              src: pol5,
              width: 500,
              height: 500,
          },
          {
              src: pol1,
              width: 500,
              height: 500,
          },
          {
              src: pol2,
              width: 500,
              height: 500,
          },
          {
              src: pol3,
              width: 500,
              height: 500,
          },
          {
              src: pol4,
              width: 500,
              height: 500,
          },
          {
              src: pol5,
              width: 500,
              height: 500,
          },
      ];
  
      const images3 = [
        {
            src: pol1,
            width: 500,
            height: 500,
          },
          {
              src: pol2,
              width: 500,
              height: 500,
          },
          {
              src: pol3,
              width: 500,
              height: 500,
          },
          {
              src: pol4,
              width: 500,
              height: 500,
          },
          {
              src: pol5,
              width: 500,
              height: 500,
          },
          {
              src: pol1,
              width: 500,
              height: 500,
          },
          {
              src: pol2,
              width: 500,
              height: 500,
          },
          {
              src: pol3,
              width: 500,
              height: 500,
          },
          {
              src: pol4,
              width: 500,
              height: 500,
          },
          {
              src: pol5,
              width: 500,
              height: 500,
          },
      ];


    return(
        <div className='Collage' id='collages'
          style= {{
            height: '100vh',
            width: '100vw',
            position: "flex"
          }}
        >
          
        <div className='sections'>

            <button id="sectionbutton1" style= {{color:"darkred"}} onClick={() => showSection(1)}>
            <b><em>One</em></b>&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button id="sectionbutton2" onClick={() => showSection(2)}>
            <b><em>Two</em></b>&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button id="sectionbutton3" onClick={() => showSection(3)}>
            <b><em>Three</em></b>
            </button>

        </div>

        <div className="gallery-container">

            <Gallery className="gallery" images={images1} />

        </div>
        <div className="gallery-container" style={{display:"none"}}>

            <Gallery className="gallery" images={images2} />

        </div>
        <div className="gallery-container" style={{display:"none"}}>

            <Gallery className="gallery" images={images3} />

        </div>
      </div>

    )
}

export default Collage;