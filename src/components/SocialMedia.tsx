import styled from "styled-components";
import ListSocialmedia from "../data/ListSocialmedia";
import { useState } from "react";

const SocialMediaContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
	gap: 1rem;
	padding: 1rem;
	& > a {
		color: var(--text-color);
		border: 1px solid white;
		border-radius: 50%;
		transition: border-radius 0.35s, transform 0.35s;
		box-sizing: border-box;
		text-decoration: none;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.3rem;
	}
	& > .active {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		transform: translate(2px, -4px);
		transition: border-radius 0.35s, transform 0.35s, color 0.35s;
		border-radius: 30px;
	}
`;

const SocialMedia = () => {
	const [hover, setHover] = useState(3);
	const [active, setActive] = useState(3);
	return (
		<SocialMediaContainer className="">
			{ListSocialmedia.map((elem, index) => {
				const { icon, link, name } = elem;
				return (
					<a
						key={index}
						href={link}
						target="_blank"
						rel="noreferrer"
						className={active === index ? "flex-item active" : "flex-item"}
						onMouseEnter={() => {
							setHover(index);
							setActive(index);
						}}
						onMouseLeave={() => {
							setHover(3);
							setActive(3);
						}}
					>
						{icon}
						{hover === index && <span>{name}</span>}
					</a>
				);
			})}
		</SocialMediaContainer>
	);
};

export default SocialMedia;
