import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import { CardInfo } from "./CardInfo";
import { Footer } from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container">
			<NavBar
				title={"Start Bootstrap"}
				home={"Home"}
				about={"About"}
				services={"Services"}
				contact={"Contact"}
			/>

			<Jumbotron
				title={"A Warm Welcome"}
				parrafo={
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
				}
				boton={"Call to action"}
			/>
			<div className="row">
				<div className="col-sm-3">
					<CardInfo />
				</div>
				<div className="col-sm-3">
					<CardInfo />
				</div>
				<div className="col-sm-3">
					<CardInfo />
				</div>
				<div className="col-sm-3">
					<CardInfo />
				</div>
			</div>
			<Footer />
		</div>
	);
}
