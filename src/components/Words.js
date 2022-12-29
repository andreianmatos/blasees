import '../App.css';
import React from 'react';
import {Parallax} from "react-scroll-parallax";

function Words() {
    return(
        <div className='Words' id='Words'
          style= {{
            height: "100%",
          }}
        >

            <Parallax 
              translateX={['10%', '10%']}
              easing="easeInQuad"
            >
            <div  className="textDiv" id="introText">
              This text is not yet enclosed in a box. This text is enclosed in a box. This text is enclosed in a box.
            </div>
            </Parallax>
        
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

export default Words;