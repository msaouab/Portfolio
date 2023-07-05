import { useEffect, useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";

const listNav = [
	{
		link: "/",
		name: "About Me",
	},
	{
		link: "/contact",
		name: "Contact Me",
	},
	{
		link: "/edu",
		name: "Education",
	},
	{
		link: "/project",
		name: "Projects",
	},
	{
		link: "/work",
		name: "Work Experience",
	},
];

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
		& > a.active {
			color: rgba(255, 255, 255, 1);
			border-bottom: 2px solid rgba(255, 255, 255, 1);
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
				right: 0.77rem;
			}
		}
	}
`;

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("/");

	useEffect(() => {
		const path = window.location.pathname;
		setActive(path);
	}, []);

	return (
		<NavBarContaier className={isOpen ? "open" : " "}>
			<div className="Topline" />
			<div onClick={() => setIsOpen(!isOpen)} className="button">
				<Hamburger
					toggled={isOpen}
					toggle={setIsOpen}
					color="#fff"
					duration={0.8}
					rounded
				/>
			</div>
			<nav className="">
				{listNav.map((item, index) => (
					<a
						key={index}
						href={item.link}
						className={active === item.link ? "active" : ""}
					>
						{item.name}
					</a>
				))}
			</nav>
		</NavBarContaier>
	);
};

export default NavBar;
