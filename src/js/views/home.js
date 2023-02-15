import React, { useEffect, useState } from "react";
import { Charactercard } from "../component/charactercard";
import { Planetcard } from "../component/planetcard";

export const Home = () => {
	const [charData, setCharData] = useState ([])
	const [planetData, setPlanetData] = useState ([])
	const API_URL = 'https://www.swapi.tech/api'


	const getCharacters = async () => {
		try {
			const respuesta = await fetch(`${API_URL}/people`,{})
			const data = await respuesta.json()
			setCharData(data.results)
		} catch (error) {
			console.log(error)
		}
	}

	const getPlanets = async () => {
		try {
			const respuesta = await fetch(`${API_URL}/planets`,{})
			const data = await respuesta.json()
			setPlanetData(data.results)
		} catch (error) {
			console.log(error)
		}
	}


   useEffect(() => {
	getCharacters()
	getPlanets()
   }, [])


	return(<div className="my-5 mx-0 bg-black">
				<h3 className="text-warning m-5">Characters.</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{charData.map(character=>{
						return <div className="text-center">
									<Charactercard key={character.uid} character={character} API_URL={API_URL} endpoint={'people'}/>
								</div>
					})}
				</div>
				<h3 className="text-warning m-5">Planets.</h3>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{planetData.map(planet=>{
						return <div className="text-center">
									<Planetcard key={planet.uid} planet={planet} API_URL={API_URL} endpoint={'planets'}/>
								</div>
					})}

				</div>
			</div>
	)
	};
