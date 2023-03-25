import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const API_URL = 'https://www.swapi.tech/api'

	const [charInfo, setCharInfo] = useState({})


	useEffect(() => {
		actions.getINFO(params).then(setCharInfo(store.currentInfo))
	}, [props])


	return (

		<div>
			{params.endpoint == 'planets' ?
				<div className="card m-5 bg-dark text-warning" style={{ height: 550 }}>
					<div className="row g-0">
						<div className="col-md-4"><img src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} className="img-fluid rounded-start" onError={(e) => (e.target.onerror = null)((e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"))}></img></div>
						<div className="col-md-8">
							<div className="card-body">
								<h1 className="card-title">{(charInfo.name)}</h1>
								<p className="card-text">{(charInfo.population)}</p>
								<p className="card-text">{(charInfo.gravity)}</p>
								<p className="card-text">{(charInfo.climate)}</p>
								<p className="card-text">{(charInfo.terrain)}</p>
								<p className="card-text">{(charInfo.surface_water)}</p>
								<p className="card-text">{(charInfo.diameter)}</p>
							</div>
						</div>
					</div>
				</div>
				: params.endpoint == 'people' ?
					<div className="card m-5 bg-dark text-warning" style={{ height: 550 }}>
						<div className="row g-0">
							<div className="col-md-4"><img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="img-fluid rounded-start" onError={(e) => (e.target.onerror = null)((e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"))}></img></div>
							<div className="col-md-8">
								<div className="card-body">
									<h1 className="card-title">{(charInfo.name)}</h1>
									<p className="card-text">{(charInfo.birth_year)}</p>
									<p className="card-text">{(charInfo.gender)}</p>
									<p className="card-text">{(charInfo.height)}</p>
									<p className="card-text">{(charInfo.hair_color)}</p>
									<p className="card-text">{(charInfo.skin_color)}</p>
									<p className="card-text">{(charInfo.eye_color)}</p>
									<p className="card-text">{(charInfo.homeworld)}</p>
								</div>
							</div>
						</div>
					</div>
					: <div className="card m-5 bg-dark text-warning" style={{ height: 550 }}>
						<div className="row g-0">
							<div className="col-md-4"><img src={`https://starwars-visualguide.com/assets/img/starships/${params.theid}.jpg`} className="img-fluid rounded-start" onError={(e) => (e.target.onerror = null)((e.target.src = "https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"))}></img></div>
							<div className="col-md-8">
								<div className="card-body">
									<h1 className="card-title">{(charInfo.name)}</h1>
									<p className="card-text">{(charInfo.model)}</p>
									<p className="card-text">{(charInfo.starship_class)}</p>
									<p className="card-text">{(charInfo.manufacturer)}</p>
									<p className="card-text">{(charInfo.cost_in_credits)}</p>
									<p className="card-text">{(charInfo.crew)}</p>
									<p className="card-text">{(charInfo.passengers)}</p>
									<p className="card-text">{(charInfo.cargo_capacity)}</p>
								</div>
							</div>
						</div>
					</div>}
			<Link to="/">
				<span className="btn btn-dark text-warning btn-lg" href="#" role="button">
					back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
