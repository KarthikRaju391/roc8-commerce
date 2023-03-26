import React, { useEffect, useState, useContext } from "react";
import {Link} from 'react-router-dom'
import { SearchContext } from "../context/SearchContext";
import { SearchBox } from "./SearchBox";

const Navbar = () => {
	const { searchTerm ,setSearchTerm } = useContext(SearchContext);
	
    const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		async function getCategories() {
			const res = await fetch("https://fakestoreapi.com/products/categories");
			const data = await res.json();
            setCategories(data);
		}

        getCategories();
	}, []);

	return (
		<nav className="border rounded-lg border-gray-800 flex justify-between">
			<Link to={"/"} className="ml-2">
				Roc8-Commerce
			</Link>
			<ul className="flex justify-end gap-3 mr-4">
				{ categories.map((category) => (
					<li className="nav-item">
					<Link to={`/products/${category}`} className="nav-link">
						{category}
					</Link>
				</li>))}
				<li className="nav-item">
					<Link to={"/cart"} className="nav-link">
						Cart
					</Link>
				</li>
				<SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
			</ul>
		</nav>
	);
};

export default Navbar;
