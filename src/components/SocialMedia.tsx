import styled from "styled-components";
import Socialmedia from "../data/ListSocialmedia";

const SocialMediaContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
	padding-top: 2rem;
	& > a {
		border-radius: 50%;
		transition: box-shadow 0.3s ease-in;
		box-sizing: border-box;
		text-decoration: none;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		& > img {
			width: 25px;
			height: 25px;
		}
		& > .tooltip {
			position: absolute;
			top: -30px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #000;
			color: #fff;
			padding: 6px 10px;
			border-radius: 5px;
			opacity: 0;
			visibility: hidden;
			font-size: 14px;
			transition: all 0.3s ease;
		}
	}
	& > a:hover {
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
		& > .tooltip {
			opacity: 1;
			visibility: visible;
			top: -50px;
		}
	}
`;

const SocialMedia = () => {
	return (
		<SocialMediaContainer>
			{Socialmedia.map((elem, index) => (
				<a key={index} href={elem.url} target="_blank" rel="noreferrer">
					<img src={elem.icon} alt={elem.name} />
					<div className="tooltip">{elem.name}</div>
				</a>
			))}
		</SocialMediaContainer>
	);
};

export default SocialMedia;
