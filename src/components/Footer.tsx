import { useEffect, useState } from "react";
import {
	AiOutlineArrowsAlt,
	AiOutlineClose,
	AiOutlineMinus,
} from "react-icons/ai";
import styled from "styled-components";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

const BottomNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 5rem;
	margin-left: 5%;
	& > .Points {
		display: flex;
		gap: 0.5rem;
		& > span {
			width: 0.8rem;
			height: 0.8rem;
			background: white;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: crosshair;
			& > svg {
				width: 10px;
				height: 10px;
			}
		}
		& > .red {
			background-color: #ff5f56;
		}
		& > .yellow {
			background-color: #ffbd2e;
		}
		& > .green {
			background-color: #27c93f;
		}
	}
	& > .footer {
		width: 100%;
		& > .Bottomline {
			width: 100%;
			height: 0.15rem;
			background-color: var(--text-color);
			cursor: text;
		}
		& > .copyright {
			display: flex;
			align-items: center;
			justify-content: space-between;
			text-align: center;
			gap: 1rem;
			padding: 0.5rem 1rem 0 0;
			& > p {
				font-family: var(--font-name);
			}
			& > span {
				display: flex;
				gap: 0.3rem;
				& > a {
					text-decoration: none;
					color: #000;
					font-size: 1rem;
					cursor: pointer;
				}
				& > a:hover {
					color: var(--secondary-color);
				}
			}
		}
	}
	@media (max-width: 1024px) {
		& > .footer {
			.Bottomline {
				/* width: 90%; */
			}
		}
	}
	@media (max-width: 768px) {
		flex-direction: column-reverse;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		margin: 0;
		padding: 0 2rem;
		& > .footer {
			border: 1px solid red;
			& > .Bottomline {
				/* width: 90%; */
			}
			& > .copyright {
				flex-direction: column;
			}
		}
	}
`;

const Footer = () => {
	const [hover, setHover] = useState(true);
	const [currentYear, setCurrentYear] = useState(Number);

	const handleMouseEnter = () => {
		setHover(true);
	};
	const handleMouseLeave = () => {
		setHover(false);
	};

	useEffect(() => {
		const date = new Date();
		setCurrentYear(date.getFullYear());
	}, []);

	return (
		<BottomNav className="">
			<div
				className="Points"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<span className="red">{hover && <AiOutlineClose />}</span>
				<span className="yellow">{hover && <AiOutlineMinus />}</span>
				<span className="green">{hover && <AiOutlineArrowsAlt />}</span>
			</div>
			<div className="footer">
				<div className="Bottomline"></div>
				<div className="copyright">
					<p>Copyright © {currentYear}. All rights are reserved</p>
					<span>
						<a href="https://github.com/msaouab" target="_blank">
							<FiGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/msaouab/"
							target="_blank"
						>
							<RiLinkedinLine />
						</a>
					</span>
				</div>
			</div>
		</BottomNav>
	);
};

export default Footer;
