import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className="border rounded-lg border-gray-800 flex justify-between">
			<Link to={"/"} className="ml-2">
				Roc8-Commerce
			</Link>
			<ul className="flex justify-end gap-3 mr-4">
				<li className="nav-item">
					<Link to={"/"} className="nav-link">
						Products
					</Link>
				</li>
				<li className="nav-item">
					<Link to={"/cart"} className="nav-link">
						Cart
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
