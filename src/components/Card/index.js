import React from "react"
import "./style.css"

function Card(props){
    return(
        <button className="charCard" onClick={() => {
          props.clickHandle(props.id)          }
          }>
        <div className="img-container">
          <img
            alt={props.name}
            src = {props.image}
          />
        </div>
      </button>
    )

}

export default Card