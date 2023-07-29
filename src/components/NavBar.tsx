import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import { Link, NavLink } from "react-router-dom";

const listNav = [
	{
		link: "/",
		name: "About Me",
	},
	{
		link: "/edu",
		name: "Education",
	},
	{
		link: "/project",
		name: "Projects",
	},
];

const NavBarContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 4%;
	padding: 1rem 0;
	& > .Topline {
		width: 40%;
		height: 0.15rem;
		background-color: var(--text-color);
		cursor: text;
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
			color: var(--text-color);
			border-bottom: 2px solid rgba(255, 255, 255, 0.7);
			transition: all 0.3s ease-in-out;
		}
		& > a:hover {
			color: var(--text-color);
			border-bottom: 2px solid rgba(70, 130, 169, 0.7);
			transform: scale(1.1);
		}
		& > a.active {
			color: var(--text-color);
			border-bottom: 2px solid var(--text-color);
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
				top: 2.8rem;
				right: 1.6rem;
				width: 10rem;
				background-color: var(--primary-color);
				& > a {
					color: var(--text-color);
					height: 2rem;
				}
				& > :first-child {
					margin-top: 1rem;
				}
			}
		}
	}
`;

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {

		const handleClickOutside = (event: any) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<NavBarContainer className={isOpen ? "open" : ""}>
			<div className="Topline" />
			<div onClick={handleToggle} className="button">
				<Hamburger
					toggled={isOpen}
					toggle={handleToggle}
					color="#fff"
					duration={0.8}
					rounded
				/>
			</div>
			<nav className="">
				{listNav.map((item, index) => (
					<NavLink
						key={index}
						to={item.link}
						className={`${
							location.pathname === "test" ? "active" : ""
						}`}
						onClick={() => setIsOpen(false)}
					>
						{item.name}
					</NavLink>
				))}
			</nav>
		</NavBarContainer>
	);
};

export default NavBar;
