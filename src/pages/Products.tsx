import React, { useEffect, useState } from "react";
import ProductItem from "../components/Product";
import { Product as ProductType } from "../utils/types";

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        async function getProducts(): Promise<void> {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProducts(data);
        }

        getProducts();
    }, [])

	return (
		<div className="mt-8">
			<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
		</div>
	);
};

export default Products;
