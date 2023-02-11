import React, { useEffect, useState } from "react";
import { Charactercard } from "../component/charactercard";

export const Home = () => {

	const [character, setCharacter] = useState([])

	const getCharacter = () => {
		fetch("https://www.swapi.tech/api/people/1")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setCharacter(data.result.properties)})
		.catch(err => console.error(err))
	}

   useEffect(() => {
	getCharacter()
   }, [])


	

	return(
	<div className="text-center mt-5">
		<Charactercard/>
	</div>
	)
	};
