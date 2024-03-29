import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./favorites";

export const Navbar = () => {
	return (

		<nav className="navbar mt-auto navbar-black bg-black navbar-expand-lg sticky-top">
			<div className="container flex me-0">
				<Link to={"/"} className="navbar-brand text-warning me-5" href="#"><h1 style={{ fontSize: 100 }}>Star wars</h1></Link>
				<Favorites />
			</div>
		</nav>

	);
};
