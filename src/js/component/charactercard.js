import React, { useEffect, useState } from "react";
import { element, object } from "prop-types";

export const Charactercard = ({charData , charProperties}) => {
    
    

    return (
            <div className="card mx-2 rounded rounded-4" style={{ width: 300}}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${charData.uid}.jpg`} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{charProperties.name}</h5>
                    <p className="card-text">Birth Year: {charProperties.birth_year}</p>
                    <p className="card-text">Gender: {charProperties.gender}</p>
                    <p className="card-text">Hair Color: {charProperties.hair_color}</p>
                    <p className="card-text">Eye Color: {charProperties.eye_color}</p>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    <a href="#" className="btn btn-primary">Add to favorites</a>
                </div>
            </div>
    );

};