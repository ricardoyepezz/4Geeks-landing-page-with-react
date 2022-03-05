import React from "react";
import "../../styles/index.css";

function Jumbotron() {
	return (
		<div className="jumboTron card p-5 mb-5 bg-secondary text-white">
			<div className="card-body">
				<h1 className="card-title">A Warm Welcome!</h1>
				<p className="card-text">
					With supporting text below as a natural lead-in to
					additional content.
				</p>
				<a href="#" className="btn btn-primary">
					Call to action!
				</a>
			</div>
		</div>
	);
}

export default Jumbotron;
