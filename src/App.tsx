import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
	SignedIn,
	SignedOut,
	UserButton,
	ClerkProvider,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
	return (
		<ClerkProvider
			publishableKey={import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY}
		>
			<div className="App">
				<h1 className="text-3xl font-bold underline">Hello world</h1>
				<UserButton />
				<SignedIn>
					<h1>You are signed in as user</h1>
				</SignedIn>
				<SignedOut>
					<h1>You are signed out, please sign in</h1>
				</SignedOut>
			</div>
		</ClerkProvider>
	);
}

export default App;
