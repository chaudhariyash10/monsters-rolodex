import React from "react";

import "./seach-component.styles.css";

export const SearchBox = ({placeholder ,handleChange }) => (
    <input type="search" className="search" placeholder={placeholder} onChange={ handleChange }/>
)