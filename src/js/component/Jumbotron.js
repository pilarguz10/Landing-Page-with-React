import React from "react";
import PropTypes from "prop-types";

function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.parrafo}</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{props.boton}
				</a>
			</p>
		</div>
	);
}

Jumbotron.propTypes = {
	title: PropTypes.string,
	parrafo: PropTypes.string,
	boton: PropTypes.string
};

export default Jumbotron;
