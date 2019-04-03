import React from "react"
import "./style.css"

function Header(props){
    return(    
    <div>
        <nav className="navbar navbar-light bg-light text-right">
          <span className="navbar-brand mb-0 h1">Score: {props.score}</span> 
          <span className="navbar-brand mb-0 h1">Top Score: {props.topScore}</span> 
        </nav>
    </div>
    )

    
}

export default Header