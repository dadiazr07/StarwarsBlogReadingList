import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { json } from "react-router";
import { Charactercard } from "../component/charactercard";
import { Planetcard } from "../component/planetcard";
import { Starshipscard } from "../component/starshipscard";

export const Home = () => {
	const { store, actions } = useContext(Context)
	const API_URL = 'https://www.swapi.tech/api'


	
   useEffect(() => {
	actions.getCharacters()
	actions.getPlanets()
	actions.getStarships()
   }, [])


	return(<div className="my-5 mx-0 bg-black">
				<h3 className="text-warning m-5">characters.</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{store.charData.map(character=>{
						return <div className="text-center">
									<Charactercard key={character.uid} character={character} API_URL={API_URL} endpoint={'people'}/>
								</div>
					})}
				</div>

				<h3 className="text-warning m-5">planets.</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{store.planetData.map(planet=>{
						return <div className="text-center">
									<Planetcard key={planet.uid} planet={planet} API_URL={API_URL} endpoint={'planets'}/>
								</div>
					})}
				</div>

				<h3 className="text-warning m-5">starships.</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{store.starshipsData.map(starship=>{
						return <div className="text-center">
									<Starshipscard key={starship.uid} starship={starship} API_URL={API_URL} endpoint={'starships'}/>
								</div>
					})}
				</div>
			</div>
	)
	};
