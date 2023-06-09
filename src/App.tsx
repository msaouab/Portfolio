import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";
import Edu from "./Edu";
import Projects from "./Projects";
import { useEffect } from "react";

const AppContainer = styled.div`
`;

const RoutesContainer = styled.div`
	display: grid;
	grid-template-rows: 5vh auto 5vh;
	align-items: center;
	height: 100vh;
	gap: 2rem;
	& > header {
		padding-top: 1rem;
	}
	& > main {
		padding-top: 2rem;
	}
	& > footer {
		padding-bottom: 1rem;
	}
	@media (max-width: 1000px) {
	}
`;

function AppRouter() {
	return (
		<BrowserRouter>
			<RoutesContainer>
				<header>
					<NavBar />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Profile />} />
						<Route path="/edu" element={<Edu />} />
						<Route path="/project" element={<Projects />} />
					</Routes>
				</main>
				<footer>
					<Footer />
				</footer>
			</RoutesContainer>
		</BrowserRouter>
	);
}

function App() {
	useEffect(() => {
		const doctitle = document.title;
		window.onblur = () => {
			document.title = "Come back soon :(";
		};

		window.onfocus = () => {
			document.title = doctitle;
		};

		return () => {
			window.onblur = null;
			window.onfocus = null;
		};
	}, []);

	return (
		<AppContainer>
			{/* <main> */}
				<AppRouter />
			{/* </main> */}
			{/* <footer><Footer /></footer> */}
		</AppContainer>
	);
}

export default App;
