import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Carrier from "./pages/Carrier";

const RoutesContainer = styled.div`
	display: grid;
	grid-template-rows: 5vh auto 5vh;
	align-items: center;
	height: 100dvh;
	gap: 2rem;
	& > header {
		padding: 0;
		margin: 0;
	}
	& > main {
		padding-top: 2rem;
	}
	& > footer {
		padding-bottom: 1rem;
	}
	@media (max-width: 1000px) {
		& > footer {
		}
	}
	@media (max-width: 500px) {
		& > footer {
			margin-top: 4rem !important;
		}
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
						<Route path="/carrier" element={<Carrier />} />
						<Route path="/project" element={<Projects />} />
						{/*		add Article Page	*/}
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
		<>
			<AppRouter />
		</>
	);
}

export default App;
