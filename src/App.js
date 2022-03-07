import React from "react";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { GlobalStyle } from "./styles/globalStyles";

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Home />
		</>
	);
}

export default App;
