import React, { useEffect, useState } from "react";
import { element, object } from "prop-types";
import { Link } from "react-router-dom";

export const Starshipscard = ({starship , API_URL , endpoint}) => {
    
    

    return (
            <div className="card bg-black text-warning rounded mx-2 rounded-5 border-warning pb-0" style={{ minWidth: 300 , height: 450}}>
                <img style={{ minHeight: 300}} className="card-img-top mb-1" src={`https://starwars-visualguide.com/assets/img/${endpoint}/${starship.uid}.jpg`} onError={(e) =>(e.target.onerror = null)((e.target.src ="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"))} />
                <div className="card-body mb-0">
                    <h5 className="card-title mb-3 mt-0">{starship.name}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-auto mb-0">
                        <Link to={`/details/${endpoint}/${starship.uid}`} className="btn btn-dark btn-sm text-warning">Learn more!</Link>
                        <a href="#" className="btn btn-dark btn-sm text-warning">♡</a>
                    </div>
                </div>
            </div>
    );

};