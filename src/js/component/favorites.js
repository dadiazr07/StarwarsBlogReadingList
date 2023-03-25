import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorites = () => {
    const { store, actions } = useContext(Context)

    return (
        <>
            <div class="btn-group dropstart ms-5">
                <button type="button" class="btn btn-warning btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                </button>
                {store.favorites.length < 1
                    ? <ul className="dropdown-menu bg-warning"><li><h6 class="dropdown-header text-dark">Favs you have not</h6></li></ul>
                    : <ul className="dropdown-menu bg-warning">
                        {store.favorites.map((ele) =>{
                            return <li class="dropdown-item-text text-dark" key={ele.url}>{ele.name.toLowerCase()}</li>
                        })}
                    </ul>
                }

                {/* {store.favorites.map((element) => {
                        return <li key={element.id}>{element.name}</li>
                    })} */}

            </div>
        </>
    )
}