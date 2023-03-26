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
		<nav className="border rounded-lg p-4 border-gray-800 flex flex-col md:flex-row justify-between items-center">
			<Link to={"/"} className="md:ml-2 text-3xl md:text-4xl font-semibold">
				Roc8-Commerce
			</Link>
			<ul className="flex justify-end items-center mt-4 md:mt-0 gap-3 md:mr-4">
				<SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
				<li>
					<Link to={"/cart"} className="md:text-xl bg-gray-800 hover:bg-gray-700 text-slate-200 px-3 md:px-6 py-3 rounded-md">
						Cart
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
