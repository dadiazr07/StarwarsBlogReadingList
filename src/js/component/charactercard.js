import React, { useEffect, useState } from "react";
import { element, object } from "prop-types";
import { Link } from "react-router-dom";

export const Charactercard = ({character , API_URL , endpoint}) => {

  

    return (
            <div className="card bg-black text-warning rounded mx-2 rounded-5 border-warning" style={{ minWidth: 300, height: 450}}>
                <img style={{ minHeight: 300}} src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top mb-1"/>
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to={`/details/${endpoint}/${character.uid}`} className="btn btn-dark btn-sm text-warning">Learn more!</Link>
                        <a href="#" className="btn btn-dark btn-sm text-warning">♡</a>
                    </div>
                </div>
            </div>
    );

};