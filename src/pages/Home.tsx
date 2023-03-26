import React, { useEffect, useState } from "react";
import Products from "../components/Products";

const Home = () => {
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
		<div>
		</div>
	);
};

export default Home;
