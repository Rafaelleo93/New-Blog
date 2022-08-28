import React from "react";
import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard.jsx";
import PlanetsCard from "../component/PlanetsCard.jsx";
import StarshipCard from "../component/StarshipCard.jsx";


export const Home = () => (
	<>
	<CharacterCard/>
	<PlanetsCard/>
	<StarshipCard/>
	</>
);
