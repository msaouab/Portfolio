import { useState } from "react";
import {
	AiOutlineArrowsAlt,
	AiOutlineClose,
	AiOutlineMinus,
} from "react-icons/ai";
import styled from "styled-components";

const HeaderContainer = styled.div`
	width: 100%;
	header {
		display: flex;
		align-items: center;
		background: linear-gradient(
			90deg,
			rgba(207, 229, 235, 1) 0%,
			rgba(120, 120, 120, 1) 100%
		);
		width: 100%;
		border-radius: 10px 10px 0 0;
		& > .threePoints {
			display: flex;
			gap: 0.2rem;
			margin-left: 0.5rem;
			& > span {
				width: 12px;
				height: 12px;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
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
		& > .threePoints:hover {
			& > span {
				cursor: pointer;
			}
		}
		& > p {
			color: #ffffff;
			margin: auto;
		}
	}
`;

const HeaderProject = () => {
	const [hover, setHover] = useState(true);

	const handleMouseEnter = () => {
		setHover(true);
	};
	const handleMouseLeave = () => {
		setHover(false);
	};

	return (
		<HeaderContainer>
			<header>
				<div
					className={`threePoints`}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<span className="red">{hover && <AiOutlineClose />}</span>
					<span className="yellow">
						{hover && <AiOutlineMinus />}
					</span>
					<span className="green">
						{hover && <AiOutlineArrowsAlt />}
					</span>
				</div>
				<p>Mohamed Saouab@1337:~/Project</p>
			</header>
		</HeaderContainer>
	);
};

export default HeaderProject;
