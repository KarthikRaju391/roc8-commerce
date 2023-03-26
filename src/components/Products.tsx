import React, { useContext, useEffect, useState } from "react";
import { Product as ProductType } from "../utils/types";
import ProductsList from "./ProductsList";

const Products = () => {
	const [products, setProducts] = useState<ProductType[]>([]);
    
	useEffect(() => {
		async function getProducts(): Promise<void> {
			const res = await fetch(`https://fakestoreapi.com/products`);
			if (!res.ok) throw new Error("Error fetching products");
			const data = await res.json();
			setProducts(data);
		}

		getProducts();
	}, []);

	return (
		<div className="mt-8">
			<ProductsList products={products} />
		</div>
	);
};

export default Products;
