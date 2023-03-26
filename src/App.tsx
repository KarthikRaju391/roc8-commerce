import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/products/:id" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/signin" element={<h1>Sign In</h1>} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
