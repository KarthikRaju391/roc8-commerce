import React from "react";

const Star = () => {
	return (
		<span>
			{/* generate svg for yellow star */}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="#FDB813"
				width="20"
				height="20"
			>
				<path d="M10 0L13.09 6.1599L19.48 7.19L14.82 12.38L15.91 19L10 15.31L4.09 19L5.18 12.38L0.52 7.19L6.91 6.1599L10 0Z" />
			</svg>
		</span>
	);
};

export default Star;
