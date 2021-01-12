import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function CardInfo(props) {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card">
				<img
					className="card-img-top"
					src={props.imgURL}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href={props.buttonURL} className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
}

CardInfo.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
	imgURL: PropTypes.string
};

// import React from "react";
// import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
// import { CardImg } from "./CardImg.jsx";
// import { Button } from "./Button.jsx";

// export function CardInfo() {
// 	return (
// 		<Card>
// 			<CardBody>
// 				<CardImg />
// 				<CardTitle>Card Title</CardTitle>
// 				<CardText>
// 					Some quick example text to build on the card title and make
// 					up the bulk of the cards content.
// 				</CardText>

// 				<Button />
// 			</CardBody>
// 		</Card>
// 	);
// }
