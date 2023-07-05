import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";
import Edu from "./Edu";

const AppContainer = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	align-items: center;
	padding: 2rem 0 1rem;
	height: 95vh;
	gap: 1rem;

	& > footer {
		padding: 1rem 0;
	}
`;

function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Profile />} />
				<Route path="/edu" element={<Edu />} />
			</Routes>
		</BrowserRouter>
	);
}

function App() {
	return (
		<AppContainer>
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
