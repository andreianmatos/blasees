import '../App.css';
import React from 'react';
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import {Parallax} from "react-scroll-parallax";
import Carousel, { CarouselItem } from "./Carousel";

import Slider from "react-slick";

import ImageGallery from 'react-image-gallery';
//import "react-image-gallery/styles/css/image-gallery.css";


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

function showSection(chosenSection) {
  document.getElementById("sectionbutton1").style.color = "black";
  document.getElementById("sectionbutton2").style.color = "black";
  console.log(document.getElementsByClassName("carouselCollage"))
  document.getElementsByClassName("carouselCollage")[0].style.display = "none";
  document.getElementsByClassName("carouselCollage")[1].style.display = "none";
  document.getElementById("sectionbutton"+chosenSection).style.color = "darkred";
  document.getElementsByClassName("carouselCollage")[chosenSection-1].style.display = "grid";
}

function Collage() {

    const images1 = [
      {
        original: pol1,
        thumbnail: pol1,
      },
      {
        original: pol2,
        thumbnail: pol2,
      },
      {
        original: pol3,
        thumbnail: pol3,
      },
      {
        original: pol4,
        thumbnail: pol4,
      },
      {
        original: pol5,
        thumbnail: pol5,
      },
      {
        original: pol6,
        thumbnail: pol6,
      },
    ];

    const images2 = [
      {
        original: pol1,
        thumbnail: pol1,
      },
      {
        original: pol1,
        thumbnail: pol2,
      },
      {
        original: pol3,
        thumbnail: pol3,
      },
    ];

    const images3 = [
      {
        original: pol1,
        thumbnail: pol1,
      },
      {
        original: pol2,
        thumbnail: pol2,
      },
      {
        original: pol3,
        thumbnail: pol3,
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

              <button id="sectionbutton1" onClick={() => showSection(1)}>
                <b><em>Preview</em></b>&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button id="sectionbutton1" onClick={() => showSection(2)}>
                <b><em>One</em></b>&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button id="sectionbutton2" onClick={() => showSection(3)}>
                <b><em>Two</em></b>&nbsp;&nbsp;&nbsp;&nbsp;
              </button>

          </div>


          <div  className="carouselWrap">

            <div  className="carouselCollage">

            <div  className="textConcept">
              Collection of visuals.
            </div>

            <ImageGallery thumbnailPosition={"left"} showThumbnails={true} showNav={false} showPlayButton={false} items={images1} />

          </div>

          <div  className="carouselCollage"
            style= {{
              display:"none"
            }}
          >

            <div  className="textConcept" >
              Randomly generated collages out of a set of instant pictures.
            </div>

            <ImageGallery items={images2} />

          </div>

          <div  className="carouselCollage"
            style= {{
              display:"none"
            }}
          >

            <div  className="textConcept" >
              Randomly generated collages out of a set of instant pictures.
            </div>

            <ImageGallery items={images3} />

          </div>

      </div>

      </div>

    )
}

export default Collage;