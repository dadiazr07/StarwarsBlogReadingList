import React, { useEffect, useState } from "react";
import { element, object } from "prop-types";
import { Link } from "react-router-dom";

export const Charactercard = ({character , API_URL , endpoint}) => {

  

    return (
            <div className="card bg-black text-warning rounded mx-2 rounded-5 border-warning " style={{ minWidth: 300, height: 500}}>
                <img style={{ height: 350}} className="card-img-top mb-1" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />
                <div className="card-body position-relative">
                    <h5 className="card-title">{character.name}</h5>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end position-absolute bottom-0 end-0 mb-3 me-3">
                        <Link to={`/details/${endpoint}/${character.uid}`} className="btn btn-dark btn-sm text-warning">Learn more!</Link>
                        <a href="#" className="btn btn-dark btn-sm text-warning">♡</a>
                    </div>
                </div>
            </div>
    );

};