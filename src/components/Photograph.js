import '../App.css';
import React from 'react';
import {Parallax} from "react-scroll-parallax";
import {MouseContainer, ChasingElement} from 'react-mouse-image-move'

import pho1 from '../assets/photographs/1.png'; 
import pho2 from '../assets/photographs/2.png'; 

import pho3 from '../assets/photographs/floresta.png'; 

function Photograph() {
    return(
        <div className='Photograph' id='photographs'
          style= {{
            height: '100%;',
            position: "flex"
          }}
        >
        
        <div className='photos'
          style= {{
            display: 'grid',
            gridAutoFlow: "column"
          }}
        >

          <MouseContainer
            styles= {{
              width: '100%',
              height: '70vh',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            chasingElement={
              <ChasingElement 
                  styles={{
                    
                  }}
              >
                <img   style={{width: "40%"}} src={pho1} alt="" />
              </ChasingElement>
            }
          />
          <MouseContainer
            styles= {{
              width: '100%',
              height: '70vh',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            chasingElement={
              <ChasingElement 
                  styles={{
                    
                  }}
              >
                <img   style={{width: "40%"}} src={pho2} alt="" />
              </ChasingElement>
            }
          />
        </div>

        <MouseContainer
          styles= {{
            width: '100%',
            height: '70vh',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          chasingElement={
            <ChasingElement 
                styles={{
                   
                }}
            >
              <img   style={{width: "50%"}} src={pho3} alt="" />
            </ChasingElement>
          }
        />
      
      </div>
    )
}

export default Photograph;