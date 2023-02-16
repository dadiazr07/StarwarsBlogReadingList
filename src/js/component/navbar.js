import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

			<nav className="navbar mt-auto navbar-black bg-black navbar-expand-lg sticky-top">
				<div className="container-fluid justify-content-center">
				<Link to={"/"} className="navbar-brand text-warning ms-5" href="#"><h1 style={{ fontSize: 100}}>Star wars</h1></Link>
				</div>
			</nav>

	);
};
