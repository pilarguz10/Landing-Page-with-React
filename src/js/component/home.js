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
				<CardInfo
					title="Aristóteles "
					description="Fue discípulo de Platón y de otros pensadores, como Eudoxo de Cnido, durante los veinte años que estuvo 
                    en la Academia de Atenas.5​ Poco después de la muerte de Platón, Aristóteles abandonó Atenas para ser el maestro de Alejandro Magno en el Reino de Macedonia durante casi 5 años.5​ En la última etapa de su vida fundó el Liceo en Atenas, donde enseñó hasta un año antes de su muerte.5​​"
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/Arist%C3%B3teles"
					imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg"
				/>

				<CardInfo
					title="Platón "
					description="Participó activamente en la enseñanza de la Academia y escribió sus obras, mayoritariamente en forma de diálogo, sobre los más diversos temas, tales como: filosofía política, ética, psicología, antropología filosófica, epistemología, gnoseología, metafísica, cosmogonía, cosmología, filosofía del lenguaje y filosofía de la educación.
                     A diferencia de sus contemporáneos, se cree que todo su trabajo ha sobrevivido intacto."
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/Plat%C3%B3n"
					imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/220px-Plato_Pio-Clemetino_Inv305.jpg"
				/>

				<CardInfo
					title="Sócrates "
					description="No hay ninguna evidencia de que Sócrates haya publicado algún escrito de su autoría. Detalles de su vida son conocidos gracias a tres fuentes contemporáneas: los diálogos de Platón, las obras de Aristófanes y los diálogos de Jenofonte. 
                    En los diálogos de Platón se encuentran los relatos más completos de Sócrates que han sobrevivido desde la antigüedad. "
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/S%C3%B3crates"
					imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Socrate_du_Louvre.jpg/220px-Socrate_du_Louvre.jpg"
				/>

				<CardInfo
					title="Heráclito "
					description="La principal fuente de su vida nos llega a través de Diogenes Laercio. Nació en el seno de una familia aristócrata, pero evitó su vida privilegiada convirtiéndose en un filósofo ermitaño autodidacta. La obra de Heráclito es completamente aforística y se le atribuye un libro titulado Sobre la naturaleza (περὶ φύσεως). 
                    Como de los demás filósofos griegos anteriores a Platón, no quedan más que fragmentos de sus obras, y en gran parte se conocen sus aportes gracias a testimonios posteriores."
					buttonLabel="Find out more!"
					buttonURL="https://es.wikipedia.org/wiki/Her%C3%A1clito"
					imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Heraclitus_Rijksmuseum_SK-A-2784.jpeg/800px-Heraclitus_Rijksmuseum_SK-A-2784.jpeg"
				/>
			</div>

			{/* <div className="row">
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
			</div> */}
			<Footer />
		</div>
	);
}
