import { useState } from "react";
import {
	AiOutlineArrowsAlt,
	AiOutlineClose,
	AiOutlineMinus,
} from "react-icons/ai";
import styled from "styled-components";

const BottomNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
			cursor: pointer;
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
	& > .Bottomline {
		width: 40%;
		height: 0.15rem;
		background-color: white;
		cursor: text;
	}
`;

const Footer = () => {
	const [hover, setHover] = useState(true);

	const handleMouseEnter = () => {
		setHover(true);
	};
	const handleMouseLeave = () => {
		setHover(false);
	};
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
			<div className="Bottomline" />
		</BottomNav>
	);
};

export default Footer;
