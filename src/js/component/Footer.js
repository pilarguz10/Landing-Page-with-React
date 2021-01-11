import React from "react";

export function Footer() {
	return (
		<footer className="page-footer font-small cyan darken-3">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-white bg-dark">
						<div className="mb-5 flex-center">
							<div className="footer-copyright text-center py-3">
								© 2020 Copyright:
								<a href="https://mdbootstrap.com/">
									{" "}
									MDBootstrap.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
