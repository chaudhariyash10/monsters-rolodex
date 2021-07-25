import React from "react";

import { Card } from "../card/card.component.jsx";

import './card-list.style.css';

export const CardList = (props) => {
    return (
      <div className="card-list">
        {
          props.monsters.map((monster, idx) => (
           <Card monster={monster} idx = {idx} />
          ))
        }
      </div>
    )
}