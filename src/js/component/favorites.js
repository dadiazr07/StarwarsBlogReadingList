import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div class="btn-group dropstart ms-5">
                <button type="button" class="btn btn-warning btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos
                </button>
                <ul className="dropdown-menu ">
                    <li><h6 class="dropdown-header">Tus favoritos</h6></li>
                    <li><a class="dropdown-item" href="#">algo</a></li>
                    <li><a class="dropdown-item" href="#">otra</a></li>
                    <li><a class="dropdown-item" href="#">mas</a></li>
                    {/* {store.favorites.map((element) => {
                        return <li key={element.id}>{element.name}</li>
                    })} */}
                </ul>
            </div>
        </>
    )
}