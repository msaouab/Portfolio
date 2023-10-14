import styled from "styled-components";
import ListSocialmedia from "../data/ListSocialmedia";

const SocialMediaContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: .1rem;
	place-items: center;
	& > a {
		color: var(--text-color);
		border: 1px solid white;
		border-radius: 50%;
		transition: transform 0.35s;
		box-sizing: border-box;
		text-decoration: none;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.3rem;
	}
	& > a:hover {
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
		transform: translate(2px, -4px);
		transition: transform 0.35s, color 0.35s;
	}
`;

const SocialMedia = () => {

	return (
		<SocialMediaContainer>
			{ListSocialmedia.map((elem, index) => {
				const { icon, link } = elem;
				return (
					<a
						key={index}
						href={link}
						target="_blank"
						rel="noreferrer"
					>
						{icon}
					</a>
				);
			})}
		</SocialMediaContainer>
	);
};

export default SocialMedia;
