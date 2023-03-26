import React, { useEffect } from "react";
import { Product as ProductType } from "../utils/types";
import { useNavigate } from "react-router-dom";
import Star from "./Star";

const ProductItem = ({ product }: { product: ProductType }) => {
	const navigate = useNavigate();

	function handleClick() {
		navigate(`/products/${product.id}`);
	}

	return (
		<div onClick={handleClick} className="border-2 flex flex-col justify-between p-4 cursor-pointer">
			<div className="w-2/3 mx-auto">
				<img className="object-cover" src={product.image} alt={product.title} />
			</div>
			<div>
				<h1 className="text-2xl">{product.title}</h1>
				<p className="flex justify-center items-center">
					<Star />
					{product.rating.rate}
				</p>
				<p>{product.rating.count} reviews</p>
				<h2 className="text-xl font-semibold"> ${product.price}</h2>
			</div>
		</div>
	);
};

export default ProductItem;
