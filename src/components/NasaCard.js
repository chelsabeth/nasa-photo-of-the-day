import React from "react";

const NasaCard = props => {
    return (
        <div className='nasaContent' key={props.index}>
            <h2>{props.title}</h2>
            <img className="nasaImg" alt="" src={props.img}/>
            <p>Photographer: {props.copyright}</p>
            <p>Date: {props.date}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}
export default NasaCard;