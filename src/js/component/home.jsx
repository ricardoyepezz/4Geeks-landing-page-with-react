import React from "react";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-3">
				<Jumbotron />
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
