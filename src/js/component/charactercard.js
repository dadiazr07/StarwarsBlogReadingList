import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { element, object } from "prop-types";
import { Link, useParams } from "react-router-dom";

export const Charactercard = ({ character, API_URL, endpoint }) => {
    const { store, actions } = useContext(Context)
    const params = useParams();



    return (
        <div className="card bg-black text-warning rounded mx-2 rounded-5 border-warning " style={{ minWidth: 300, height: 500 }}>
            <img style={{ height: 350 }} className="card-img-top mb-1" src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} />
            <div className="card-body position-relative">
                <h5 className="card-title">{(character.name).toLowerCase()}</h5>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end position-absolute bottom-0 end-0 mb-3 me-3">
                    <Link to={`/details/${endpoint}/${character.uid}`} className="btn btn-dark btn-sm text-warning">Learn more!</Link>                 
                    <a onClick={(e) => { 
                        if (store.allData.length < 1) {
                            actions.addAllData()
                            actions.addToFav(character.url)
                        } else { actions.addToFav(character.url) }
                        }} className="btn btn-dark btn-sm text-warning">{ !store.favorites.some((el) => el.url == character.url) ? <>♡</> : <>♥</>}</a>
                </div>
            </div>
        </div>
    );

};