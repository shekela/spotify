import React from "react";
import "./sidebarOption.css"


function Sidebaroption({ title, Icon}) {
    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarIcon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}


export default Sidebaroption;