import React, { useEffect, useState } from "react";
import { element, object } from "prop-types";
import { Link } from "react-router-dom";

export const Charactercard = ({character , API_URL , endpoint}) => {

  

    return (
            <div className="card rounded mx-2 rounded-4" style={{ minWidth: 300}}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    {/* <p className="card-text">Birth Year: {charInfo.birth_year}</p>
                    <p className="card-text">Gender: {charInfo.gender}</p>
                    <p className="card-text">Hair Color: {charInfo.hair_color}</p>
                    <p className="card-text">Eye Color: {charInfo.eye_color}</p> */}
                    <Link to={`/details/${endpoint}/${character.uid}`} className="btn btn-primary">Learn more!</Link>
                    <a href="#" className="btn btn-primary">Add to favorites</a>
                </div>
            </div>
    );

};