import '../App.css';
import React from 'react';
import {Parallax} from "react-scroll-parallax";

function Home() {
    return(
        <div className='Home' id='Home'
            style= {{
                height: '100vh;'
            }}
          >
        
            <Parallax 
              translateX={['-800px', '0px']}
              scale={[0.75, 1]}
              rotate={[-180, 0]}
              easing="easeInQuad"
              >
              <div 
                className="textDiv" 
                id="text1"
                >
                 chance
                </div>
            </Parallax>

            <Parallax 
              translateX={['100%', '-100%']}
              easing="easeInQuad"
            >
              <div className="textDiv" id="text2">passing thoughts</div>
            </Parallax>

            <Parallax 
              translateX={['50%', '500%']}
              easing="easeInQuad"
            >
            <div  className="textDiv" id="text3">
              This text is enclosed in a box. This text is enclosed in a box. This text is enclosed in a box.
            </div>
            </Parallax>

          </div>

    )
}

export default Home;