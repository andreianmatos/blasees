import '../App.css';
import React from 'react';
import { TopbarData } from './TopbarData';
import AddIcon from '@mui/icons-material/Add';

var currentDisplay = false;

function showTopbar() {
    console.log(currentDisplay)
    currentDisplay = !currentDisplay;
    document.getElementById('TopbarMenu').style.display = currentDisplay ? "block" : "none";
    document.getElementById('Topbar-btn').style.transform = currentDisplay ? 'rotate(45deg)' : 'rotate(90deg)' ;
}

function Topbar() {
    return(
        <div className='Topbar' id="Topbar">
            <button
                    className='Topbar-btn' id="Topbar-btn" 
                    onClick={showTopbar}
                >
                    <AddIcon fontSize="large"/>
            </button>
            <div className='TopbarMenu' id="TopbarMenu">
                <ul className='TopbarList'>
                    {TopbarData.map((val,key) =>  {
                        return (
                        <il 
                            key={key} 
                            className = "row"
                            id="" 
                            onClick={() => {
                                document.getElementById(val.title).scrollIntoView({ 
                                    behavior: 'smooth' 
                                });
                            }}
                        >
                            <div id="title"
                                style={{fontWeight: "bolder"}}>
                                    {val.title}
                            </div>
                        </il>
                        );
                    })}
                </ul>
            </div>
    </div>
    )
}

export default Topbar;