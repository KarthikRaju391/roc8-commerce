import React, { useEffect } from "react";
import { Product as ProductType } from "../utils/types";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }: { product: ProductType }) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/products/${product.id}`);
    }

	return (
		<div onClick={handleClick} className="border-2">
            <img src={product.image} alt={product.title}/>
			<h1>{product.title}</h1>
			<p>{product.category}</p>
			<p>{product.description}</p>
			<h2>{product.price}</h2>
			<p>
				{product.rating.rate} | {product.rating.count}
			</p>
		</div>
	);
};

export default ProductItem;
