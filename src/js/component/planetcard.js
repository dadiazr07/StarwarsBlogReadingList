import React, { useEffect, useState } from "react";
import { element, object } from "prop-types";

export const Planetcard = ({planetData , planetProperties}) => {
    
    

    return (
            <div className="card mx-2 rounded rounded-4" style={{ width: 300}}>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${planetData.uid}.jpg`} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{planetProperties.name}</h5>
                    <p className="card-text">Diameter: {planetProperties.diameter}</p>
                    <p className="card-text">Population: {planetProperties.population}</p>
                    <p className="card-text">Climater: {planetProperties.climate}</p>
                    <p className="card-text">Terrain: {planetProperties.terrain}</p>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    <a href="#" className="btn btn-primary">Add to favorites</a>
                </div>
            </div>
    );

};