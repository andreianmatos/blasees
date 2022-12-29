import '../App.css';
import React from 'react';
import {Parallax} from "react-scroll-parallax";

function Home() {
    return(
        <div className='Home' id='About'
          style= {{
            height: "100%",
          }}
        >
          <Parallax 
              easing="easeInQuad"
              >
              <div class="shape_box">
                <div class="left"></div>
                <div class="right"></div>
                <p> ANDREIA MATOS </p>
                <p> i have no idea how to define myself or what to write here but i really should figure something out cos it would look nice i suppose maybe it wouldnt who knows I wish it was looking properly round and not like this but i am tired if i keep wrting it looks more and more round thats cool means i have to do some longggg text huh </p>
              </div>
            </Parallax>

            <Parallax 
              easing="easeInQuad"
              >
              <div 
                className="textDiv" 
                id="links"
                >
                  <p>
                  <a id="linkedIn" href='https://www.linkedin.com/in/andreianmatos/' target="_blank"  rel="noreferrer">
                    linkedin
                  </a>
                  </p>
                  <p>
                  <a id="instagram" href='https://www.instagram.com/blasees/' target="_blank"  rel="noreferrer">
                    instagram
                  </a>
                  </p>
                  <p>
                  <a id="soundcloud" href='https://soundcloud.com/blasees' target="_blank"  rel="noreferrer">
                    soundcloud
                  </a>
                  </p>
              </div>
            </Parallax>

          </div>

    )
}

export default Home;