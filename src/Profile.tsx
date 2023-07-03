import styled from "styled-components";
import itsme from "/its_me.jpg";
import Background from "/Background.jpeg";
import SocialMedia from "./profile/SocialMedia";
import TextProfile from "./profile/TextProfile";
import { useEffect, useState } from "react";

const ProfileContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	height: 100vh;
	color: white;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
	url(${Background});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	/* border: 1px solid red; */
	& > hr {
		width: 3rem;
		height: 0.1rem;
		background-color: white;
		border: 1px solid white;
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
	/* @media (max-width: 425px) {
		width: 425px;
	} */
`;

const ProfileImage = styled.div`
	background-image: url(${itsme});
	background-size: cover;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	border: 4px solid rgba(128, 128, 128, 0.5);
	@media (max-width: 768px) {
		width: 200px;
		height: 200px;
	}
	@media (max-width: 425px) {
		width: 150px;
		height: 150px;
	}
`;

const TypingText = ({ text }: { text: string }) => {
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
