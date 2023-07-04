import { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from 'hamburger-react'

const NavBarContaier = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 4%;
	& > .Topline {
		width: 40%;
		height: 0.15rem;
		background-color: white;
	}
	& > .button {
		display: none;
	}
	& > nav {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		& > a {
			text-align: center;
			text-decoration: none;
			color: rgba(255, 255, 255, 0.8);
			border-bottom: 2px solid rgba(255, 255, 255, 0.7);
		}
		& > a:hover {
			color: rgba(255, 255, 255, 1);
			border-bottom: 2px solid rgba(255, 255, 255, 1);
			transform: scale(1.1);
			transition: all 0.3s ease;
		}
	}
	@media (max-width: 1024px) {
		flex-direction: column-reverse;
		gap: 1rem;
		margin-left: 4%;
		& > .Topline {
			width: 100%;
		}
	}
	@media (max-width: 768px) {
		flex-direction: row;
		margin-left: 0;
		& > .Topline {
			width: 70%;
			z-index: 100;
		}
		& > .button {
			display: flex;
			align-items: center;
			width: 2rem;
			height: 2rem;
			background: transparent;
			border: none;
			cursor: pointer;
		}
		& > nav {
			display: none;
		}
		&.open {
			& > nav {
				display: flex;
				flex-direction: column;
				justify-content: center;
				position: absolute;
				top: 4rem;
				right: .77rem;
			}
		}
	}
`;

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<NavBarContaier className={isOpen ? "open" : " "}>
			<div className="Topline" />
			<div onClick={() => setIsOpen(!isOpen)} className="button">
				<Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" duration={0.8} rounded/>
			</div>
			<nav className="">
				<a id="me" href="/">
					About Me
				</a>
				<a id="contact" href="/Contact">
					Contact Me
				</a>
				<a id="edu" href="/Edu">
					Education
				</a>
				<a id="project" href="/Project">
					Projects
				</a>
				<a id="work" href="/Work">
					Work Experience
				</a>
			</nav>
		</NavBarContaier>
	);
};

export default NavBar;
