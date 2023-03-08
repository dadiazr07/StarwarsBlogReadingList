import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Favorites = () => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <ul className="list-group list-group-flush list-unstyled p-0 mb-0 bg-light">
            {store.favorites.map((element) => {
                return <li key={element.id}>{element.name}</li>
            })}
            </ul>
        </>
    )
}