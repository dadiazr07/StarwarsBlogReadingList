import React, { useEffect, useState } from "react";
import { Charactercard } from "../component/charactercard";

export const Home = () => {

	const [character, setCharacter] = useState([])
	const [charData, setCharData] = useState ([])

	const getCharacter = async () => {
		try {
			const respuesta = await fetch("https://www.swapi.tech/api/people/1")
			const datos = await respuesta.json()
            setCharData(datos.result)
			setCharacter(datos.result.properties)

		} catch (error) {
			console.log(error)
		}
	}

   useEffect(() => {
	getCharacter()
   }, [])

	return(
	<div className="text-center mt-5">
		<Charactercard character={character} charData={charData}/>
	</div>
	)
	};
