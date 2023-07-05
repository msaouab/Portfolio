import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";
import Edu from "./Edu";
import Projects from "./Projects";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	gap: 1rem;
	& > main {
		flex-grow: 1;
	}
	& > footer {
		padding: 1rem 0;
	}
`;

const RoutesContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* height: 80vh; */
	& > :nth-child(2) {
		margin: auto;
	}
	@media (max-width: 1024px) {
		height: auto;
	}
`;

function AppRouter() {
	return (
		<BrowserRouter>
			<RoutesContainer>
				<NavBar />
				<Routes>
					<Route path="/" element={<Profile />} />
					<Route path="/edu" element={<Edu />} />
					<Route path="/project" element={<Projects />} />
				</Routes>
			</RoutesContainer>
		</BrowserRouter>
	);
}

function App() {
	return (
		<AppContainer>
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
