import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { CardImg } from "./CardImg.jsx";
import { Button } from "./Button.jsx";

export function CardInfo() {
	return (
		<Card>
			<CardBody>
				<CardImg />
				<CardTitle>Card Title</CardTitle>
				<CardText>
					Some quick example text to build on the card title and make
					up the bulk of the cards content.
				</CardText>

				<Button />
			</CardBody>
		</Card>
	);
}
