import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { SearchContext } from "../context/SearchContext";
import { Product as ProductType } from "../utils/types";

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const {searchTerm} = useContext(SearchContext)

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase())
    })

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
                {searchTerm && filteredProducts.length === 0 && (
                    <h1>No products found</h1>
                )}
                {searchTerm && filteredProducts.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
                {!searchTerm && products && products.length > 0 && products.map((product) => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
		</div>
	);
};

export default Products;
