import React from "react";

function Card() {
	return (
		<div className="row gx-5 mt-5 mb-5">
			{/* row-cols-1 row-cols-md-3 g-4 */}
			<div className="col-3">
				<div className="card h-100">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<span className="border">
						<a
							href="#"
							className="btn btn-primary align-content-center">
							Go somewhere
						</a>
					</span>
				</div>
			</div>
			<div className="col-3">
				<div className="card h-100">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This card has supporting text below as a natural
							lead-in to additional content.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card h-100">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card h-100">
					<img src="..." className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
