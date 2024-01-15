import { useEffect, useState } from "react";
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

const BottomNav = styled.footer`
	width: 100%;
	& > .Bottomline {
		width: 100%;
		height: 0.2rem;
		background-color: var(--text-color);
	}
	& > .copyright {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem;
		font-family: var(--font-name);
		& > a {
			display: flex;
			text-decoration: none;
			color: #000;
			cursor: pointer;
		}
		& > a:hover {
			color: var(--secondary-color);
		}
	}
`;

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(Number);

	useEffect(() => {
		const date = new Date();
		setCurrentYear(date.getFullYear());
	}, []);

	return (
		<BottomNav>
			<div className="Bottomline"></div>
			<div className="copyright">
				<p>Copyright © {currentYear}. All rights are reserved</p>
				<a href="https://github.com/msaouab" target="_blank">
					<FiGithub />
				</a>
				<a href="https://www.linkedin.com/in/msaouab/" target="_blank">
					<RiLinkedinLine />
				</a>
			</div>
		</BottomNav>
	);
};

export default Footer;
