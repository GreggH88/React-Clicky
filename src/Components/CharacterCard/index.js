import React from "react";
import "./style.css";

function CharacterCard(props) {
  
const cardStyle = {
  width: 170,
  height: 170,

}
const imageStyle = {
  width: 140,
  height: 140,
  
}

  return (
    <div className="card" style={cardStyle}>
      <div className="content">
        <div className="img-container">
          <img src={props.image} alt={props.name} onClick={props.onClick} style={imageStyle} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
