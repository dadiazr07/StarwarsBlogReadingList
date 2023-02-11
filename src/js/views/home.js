import React, { useEffect, useState } from "react";
import { Charactercard } from "../component/charactercard";
import { Planetcard } from "../component/planetcard";

export const Home = () => {
	const [charData, setCharData] = useState ({})
	const [charProperties, setCharProperties] = useState({})
	const [planetData, setPlanetData] = useState ({})
	const [planetProperties, setPlanetProperties] = useState({})


	const getCharacter = async () => {
		try {
			const respuesta = await fetch("https://www.swapi.tech/api/people/1",{})
			const data = await respuesta.json()
			setCharData(data.result)
			setCharProperties(data.result.properties)
		} catch (error) {
			console.log(error)
		}
	}

	const getPlanets = async () => {
		try {
			const respuesta = await fetch("https://www.swapi.tech/api/planets/2",{})
			const data = await respuesta.json()
			setPlanetData(data.result)
			setPlanetProperties(data.result.properties)
		} catch (error) {
			console.log(error)
		}
	}








   useEffect(() => {
	getCharacter()
	getPlanets()
   }, [])





	return(
		<div className="">
			<div className="characters card-group text-center mt-5 mb-5 px-0">
				<Charactercard charData={charData} charProperties={charProperties}/>
				<Charactercard charData={charData} charProperties={charProperties}/>
				<Charactercard charData={charData} charProperties={charProperties}/>
				<Charactercard charData={charData} charProperties={charProperties}/>
			</div>
			<div className="planets card-group text-center mt-5 mb-5 px-0">
				<Planetcard planetData={planetData} planetProperties={planetProperties}/>
				<Planetcard planetData={planetData} planetProperties={planetProperties}/>
				<Planetcard planetData={planetData} planetProperties={planetProperties}/>
				<Planetcard planetData={planetData} planetProperties={planetProperties}/>
			</div>
		</div>

	)
	};
