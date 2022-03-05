import React from "react";
import image from "../../img/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";

function Card() {
	return (
		<div className="col-md-3 col-sm-12">
			<div className="card h-100">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="border text-center">
					<a href="#" className="btn btn-primary m-2">
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
