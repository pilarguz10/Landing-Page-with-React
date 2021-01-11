import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				{props.title}
			</a>
			<button
				className="navbar-toggler "
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon " />
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							{props.home}{" "}
							<span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.about}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.services}
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							{props.contact}
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
NavBar.propTypes = {
	title: PropTypes.string,
	home: PropTypes.string,
	about: PropTypes.string,
	services: PropTypes.string,
	contact: PropTypes.string
};

export default NavBar;
