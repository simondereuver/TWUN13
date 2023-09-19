import React from 'react'
import "../App.css"
import {SidepanelData} from './SidepanelData'

function SidePanel() {
    return (
         <div className="SidePanel">
            <ul className="SidePanelList">
            {SidepanelData.map((val, key) => {
            return(
                <li key={key} className="bar" id={window.location.pathname === val.link ? "active" : ""} onClick={()=> {window.location.pathname = val.link}}>
                    {" "}
                     <div id="icon">{val.icon}</div>{" "}
                     <div id="title">
                        {val.title}
                     </div>
                </li>
            )
            
        })}
            </ul>
        </div>
    );
}

export default SidePanel