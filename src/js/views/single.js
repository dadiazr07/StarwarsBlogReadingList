import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const API_URL = 'https://www.swapi.tech/api'

	const [charInfo, setCharInfo] = useState ({})

    const getINFO = async () => {
		try {
			const respuesta = await fetch(`${API_URL}/${params.endpoint}/${params.theid}`)
			const data = await respuesta.json()
			setCharInfo(data.result.properties)
		} catch (error) {
			console.log(error)
		}
	}


    useEffect(()=>{
        getINFO()
	},[])
    


	return (
		<div className="jumbotron">
			{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}
			<p>{params.theid}</p>
			<p>{params.endpoint}</p>
			<p>{charInfo.eye_color}//{API_URL}</p>


			<div className="card m-5" style={{ minHeight: 550}}>
				<div className="row g-0">
					<div className="col-md-4"><img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded-start" onError={(e) =>(e.target.onerror = null)((e.target.src ="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"))}></img></div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>





			<Link to="/">
				<span className="btn btn-dark text-warning btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
