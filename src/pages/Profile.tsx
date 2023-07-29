import styled from "styled-components";
import { useEffect, useState } from "react";
import SocialMedia from "../components/SocialMedia";
import TextProfile from "../components/TextProfile";
import ProfileImage from "../components/ProfileImage";

const ProfileContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	color: var(--text-color);
	& > hr {
		width: 3rem;
		height: 0.1rem;
		background-color: var(--text-color);
		border-radius: 1rem;
	}
	& > h1 {
		text-align: center;
	}
	@media (max-width: 768px) {
		& > h1 {
			font-size: 1.5rem;
		}
		& > h2 {
			font-size: 1rem;
		}
	}
`;

export const TypingText = ({ text }: { text: string }) => {
	const [typedText, setTypedText] = useState("");
	const [currentText, setCurrentText] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTypedText((prev) => prev + text[currentText]);
			setCurrentText((prev) => prev + 1);
		}, 70);
		if (currentText === text.length) clearInterval(interval);
		return () => clearInterval(interval);
	}, [text, currentText]);
	return <>{typedText}</>;
};

const Profile = () => {
	return (
		<ProfileContainer>
			<ProfileImage />
			<h1 className="">
				<TypingText text="Hi, I'm SAOUAB Mohamed" />
			</h1>
			<h2 className="">Software Engineer</h2>
			<hr className="" />
			<SocialMedia />
			<TextProfile />
		</ProfileContainer>
	);
};

export default Profile;
