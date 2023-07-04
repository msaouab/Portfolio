import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
	display: grid;
	grid-template-rows: 10vh 80vh 10vh;
	align-items: center;
	@media (max-width: 1024px) {
		gap: 3rem;
		border: 1px solid red;
		padding: 3rem 0;
		grid-template-rows: auto 1fr auto;
	}
`;

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}

function App() {

	return (
		<AppContainer
		>
			<header>
				<NavBar />
			</header>
			<main>
				<AppRouter />
			</main>
			<footer>
				<Footer />
			</footer>
		</AppContainer>
	);
}

export default App;
