import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { element, object } from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Planetcard = ({ planet, API_URL, endpoint }) => {
    const { store, actions } = useContext(Context)
    const params = useParams();



    return (
        <div className="card bg-black text-warning rounded mx-2 rounded-5 border-warning pb-0" style={{ minWidth: 300, height: 500 }}>
            <img style={{ height: 350 }} className="card-img-top mb-1" src={`https://starwars-visualguide.com/assets/img/${endpoint}/${planet.uid}.jpg`} onError={(e) => (e.target.onerror = null)((e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"))} />
            <div className="card-body position-relative">
                <h5 className="card-title">{(planet.name).toLowerCase()}</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end position-absolute bottom-0 end-0 mb-3 me-3">
                    <Link to={`/details/${endpoint}/${planet.uid}`} className="btn btn-dark btn-sm text-warning">Learn more!</Link>
                    <a onClick={(e) => { actions.addtoFav(planet.uid) }} className="btn btn-dark btn-sm text-warning">♡</a>
                </div>
            </div>
        </div>
    );

};