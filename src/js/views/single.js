import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const API_URL = 'https://www.swapi.tech/api'

	const [charInfo, setCharInfo] = useState ({})

    const getCharactersINFO = async () => {
		try {
			const respuesta = await fetch(`${API_URL}/${params.endpoint}/${params.theid}`)
			const data = await respuesta.json()
			setCharInfo(data.result.properties)
		} catch (error) {
			console.log(error)
		}
	}


    useEffect(()=>{
        getCharactersINFO()
	},[])
    


	return (
		<div className="jumbotron">
			{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}
			<p>{params.theid}</p>
			<p>{params.endpoint}</p>
			<p>{charInfo.eye_color}</p>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
