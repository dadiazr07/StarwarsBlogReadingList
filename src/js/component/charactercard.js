import React, { useEffect, useState } from "react";

export const Charactercard = (character) => {
    console.log(character)


    return (
            <div className="card w-25">
                <img src="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">Birth Year: {character.birth_year}</p>
                    <p className="card-text">Gender: {character.gender}</p>
                    <p className="card-text">Hair Color: {character.hair_color}</p>
                    <p className="card-text">Eye Color: {character.eye_color}</p>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    <a href="#" className="btn btn-primary">Add to favorites</a>
                </div>
            </div>
    );

};