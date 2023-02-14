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


	return(<div className="my-5 mx-0">
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{charData.map(character=>{
						return <div className="text-center">
									<Charactercard key={character.uid} character={character} API_URL={API_URL} endpoint={'people'}/>
								</div>
					})}

					{/* {planets.map((planet, index)=>{
						return
						<div  className="planets card-group text-center mt-5 mb-5 px-0">
							<Planetcard key={planet.url} item={planet}/>
						</div>
					})} */}


				</div>
			</div>
	)
	};
