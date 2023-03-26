import React, { useContext, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Cart = () => {
	const [ordered, setOrdered] = useState(false);
	const { cartItems, clearCart, removeFromCart, totalCost, updateCart } =
		useContext(CartContext);

	const handleOrder = () => {
		setOrdered((prev) => !prev);
		setTimeout(() => {
			clearCart();
		}, 3000);
	};

	if (cartItems.length === 0) {
		return (
			<div className="mt-4">
				<Link to={"/"} className="text-xl underline font-bold mb-8 w-3/4 mx-auto">
					Nothing in cart, continue shopping
				</Link>
			</div>
		);
	}
	return (
		<div className="mt-4">
			<h1 className="text-3xl font-bold mb-8 w-3/4 mx-auto">Shopping Cart</h1>
			<div className="w-3/4 mx-auto">
				<div>
					{cartItems.map((item) => (
						<div key={item.product.id} className="border-t-2 py-8">
							<div className="flex flex-col md:flex-row items-center mx-auto">
								<div className="md:w-1/4">
									<img
										className="object-cover"
										src={item.product.image}
										alt={item.product.title}
									/>
								</div>
								<div className="md:w-1/2 mx-auto flex flex-col justify-center items-center">
									<h1 className="text-2xl">{item.product.title}</h1>
									<h2 className="text-xl font-bold">
										${item.product.price * item.quantity}
									</h2>
									<h3 className="font-semibold mt-4">
										Quantity: {item.quantity}
									</h3>
								</div>
								<div>
									<div className="flex justify-between items-center gap-2">
										<button
											className="border-2 border-gray-800 px-2 rounded-md flex text-2xl font-semibold"
											onClick={() =>
												updateCart(item.product.id, item.quantity + 1)
											}
										>
											+
										</button>
										<button
											className="border-2 border-gray-800 px-2 rounded-md flex text-2xl font-semibold"
											onClick={() =>
												updateCart(item.product.id, item.quantity - 1)
											}
										>
											-
										</button>
									</div>
									<button
										className="mt-8 bg-red-500 px-4 py-2 text-slate-100"
										onClick={() => removeFromCart(item.product.id)}
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-3/4 mx-auto flex justify-between items-center border-t-2 mt-4 py-4">
				<h1 className="text-3xl font-bold">Subtotal</h1>
				{/* <button onClick={clearCart}>Clear Cart</button> */}
				<h2 className="text-2xl font-semibold">${totalCost.toFixed(2)}</h2>
			</div>
			<button
				onClick={handleOrder}
				className="w-3/4 mx-auto bg-gray-800 py-4 text-xl text-slate-200"
			>
				{ordered ? "Order placed successfully!!" : "Place Order"}
			</button>
		</div>
	);
};

export default Cart;
