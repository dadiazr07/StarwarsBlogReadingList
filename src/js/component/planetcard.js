import React, { useEffect, useState } from "react";
import { element, object } from "prop-types";
import { Link } from "react-router-dom";

export const Planetcard = ({planet , API_URL , endpoint}) => {
    
    

    return (
            <div className="card bg-black text-warning rounded mx-2 rounded-5 border-warning" style={{ minWidth: 300, Height: 450}}>
                <img style={{ minHeight: 300}} src={`https://starwars-visualguide.com/assets/img/${endpoint}/${planet.uid}.jpg`} onError={(e) =>(e.target.onerror = null)((e.target.src ="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"))} className="card-img-top mb-1"/>
                <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to={`/details/${endpoint}/${planet.uid}`} className="btn btn-dark btn-sm text-warning">Learn more!</Link>
                        <a href="#" className="btn btn-dark btn-sm text-warning">♡</a>
                    </div>
                </div>
            </div>
    );

};