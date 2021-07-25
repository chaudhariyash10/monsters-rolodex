import React from "react";


import "./card.styles.css";

export const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.idx}?set=set2&size=180x180`} alt="Monster" />
        <h2>{props.monster.name}</h2>
        <h4>{props.monster.email}</h4>
    </div>
)

