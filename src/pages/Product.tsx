import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import Star from "../components/Star";
import { CartContext } from "../context/CartContext";
import { Product as ProductType } from "../utils/types";

const Product = () => {
	const [product, setProduct] = useState<ProductType | null>(null);
	const [added, setAdded] = useState(false);
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	const { addToCart } = useContext(CartContext);

	function handleClick() {
		setAdded(false);
		if (product) {
			addToCart(product);
			setAdded(true);
		}
	}

	useEffect(() => {
		async function getProduct(): Promise<void> {
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const data = await res.json();
			setProduct(data);
		}

		getProduct();
		return (() => {
			setProduct(null);
		})
	}, [id]);

	return (
		<div>
			{product && (
				<div className="grid md:grid-cols-2">
					<div className="md:w-2/3 mx-auto py-20">
						<img
							className="object-cover"
							src={product.image}
							alt={product.title}
						/>
					</div>
					<div className="md:w-3/4 mx-auto md:py-20">
						<h1 className="text-2xl text-left">{product.title}</h1>
						<p className="font-light text-left">{product.category}</p>
						<p className="font-medium text-left mt-2">{product.description}</p>
						<p className="flex justify-start items-center mt-4">
							<Star />
							{product.rating.rate}
						</p>
						<p className="text-left mt-2">{product.rating.count} reviews</p>
						<h2 className="font-bold text-xl text-left mt-2">
							${product.price}
						</h2>
						<div className="flex justify-start">
							<button
								className="mt-4 bg-gray-800 rounded-md text-slate-200 p-4"
								onClick={handleClick}
							>
								{added ? "Added to cart" : "Add to cart"}
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Product;
