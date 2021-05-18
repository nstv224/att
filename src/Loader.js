import React from "react";
import "./loader.css";

export default function loder() {
	return (
		<div className="loader-container">
			<div className="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
