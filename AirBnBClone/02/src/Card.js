import React from "react";
import star from "./images/star2.png" ;

export default function Card(props){
  let badgeText
  if(props.openSpots === 0){
      badgeText ="SOLD OUT"
  }else if(props.location === "Online"){
      badgeText = "Online"
  }

    return(
        <div className="card">
            {badgeText!== undefined && <div className="card--badge">{badgeText}</div>}
         <img src={require(`./images/${props.img}`)} className="card--image" />
         <div className="card--stats">
             <img src={star} className="star"/>
             <span className="rating">{props.rating}</span>
             <span className="gray">({props.reviewCount}) •</span>
             <span className="gray">{props.location}</span>
         </div>
         <p className="card--title">{props.title}</p>
         <p><span className="bold">From ${props.price} </span> / per person </p>
        </div>
    )
}