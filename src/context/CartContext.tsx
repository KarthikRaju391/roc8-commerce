import { createContext, useState } from "react";
import { Product } from "../utils/types";

type CartItem = {
	product: Product;
	quantity: number;
};

type CartContextValue = {
	cartItems: CartItem[];
	totalCost: number;
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	updateCart: (productId: number, quantity: number) => void;
	clearCart: () => void;
};

export const CartContext = createContext<CartContextValue>({
	cartItems: [],
	totalCost: 0,
	addToCart: () => {},
	removeFromCart: () => {},
	updateCart: () => {},
	clearCart: () => {},
});

interface Props {
	children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [totalCost, setTotalCost] = useState(0);

	const addToCart = (product: Product) => {
		const existingItem = cartItems.find(
			(item) => item.product.id === product.id
		);
		if (existingItem) {
			existingItem.quantity += 1;
			setCartItems([...cartItems]);
		} else {
			setCartItems([...cartItems, { product, quantity: 1 }]);
		}
		setTotalCost(totalCost + product.price);
	};

	const removeFromCart = (productId: number) => {
		const existingItem = cartItems.find(
			(item) => item.product.id === productId
		);
		if (existingItem) {
			setCartItems(cartItems.filter((item) => item.product.id !== productId));
			setTotalCost(
				totalCost - existingItem.product.price * existingItem.quantity
			);
		}
	};

	const updateCart = (productId: number, quantity: number) => {
		const existingItem = cartItems.find(
			(item) => item.product.id === productId
		);
		if (existingItem) {
			const oldQuantity = existingItem.quantity;
            if(oldQuantity === 1 && quantity === 0) {
                if(cartItems.length === 1) {
                    clearCart();
                    return;
                }
                removeFromCart(productId);
                return;
            }
			existingItem.quantity = quantity;
			setCartItems([...cartItems]);
			setTotalCost(
				totalCost + existingItem.product.price * (quantity - oldQuantity)
			);
		}
	};

	const clearCart = () => {
		setCartItems([]);
		setTotalCost(0);
	};

	const value: CartContextValue = {
		cartItems,
		totalCost,
		addToCart,
		removeFromCart,
		updateCart,
		clearCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
