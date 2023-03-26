import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Product } from "../utils/types";
import ProductItem from "./ProductItem";

const ProductsList = ({ products }: { products: Product[] }) => {
	const { searchTerm } = useContext(SearchContext);
	const filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(searchTerm.toLowerCase());
	});
	return (
		<div>
			<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
				{searchTerm && filteredProducts.length === 0 && (
					<h1>No products found</h1>
				)}
				{searchTerm &&
					filteredProducts.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}
				{!searchTerm &&
					products &&
					products.length > 0 &&
					products.map((product) => (
						<ProductItem key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default ProductsList;
