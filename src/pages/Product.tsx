import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Product as ProductType } from "../utils/types";

const Product = () => {
	const [product, setProduct] = useState<ProductType | null>(null);
	const location = useLocation();
	const id = location.pathname.split("/")[2];

	useEffect(() => {
		async function getProduct(): Promise<void> {
			const res = await fetch(`https://fakestoreapi.com/products/${id}`);
			const data = await res.json();
			setProduct(data);
		}

		getProduct();
	}, [id]);

	return (
        <div>
            {product && (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                    <p>
                        {product.rating.rate} | {product.rating.count}
                    </p>

                    <img src={product.image} alt={product.title} />

                    <button>Add to Cart</button>
                </div>)}
        </div>
    )
};

export default Product;
