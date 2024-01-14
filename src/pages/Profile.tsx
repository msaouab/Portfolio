import styled from "styled-components";
import { useEffect, useState } from "react";
import TextProfile from "../components/TextProfile";
import SkillsSection from "../components/SkillsSection";
import ProfileImage from "../components/ProfileImage";

const HiHand =
	"https://user-images.githubusercontent.com/49567393/149633910-977f6211-103e-4220-b74d-8bf8cd9a896f.gif";

const ProfileContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	color: var(--text-color);
	overflow: hidden;
	& > h1 {
		text-align: center;
		font-family: var(--font-name);
		& > img {
			width: 2.4rem;
			height: 2.4rem;
			margin-left: 0.5rem;
		}
		@media (max-width: 768px) {
			font-size: 1.5rem;
		}
		@media (max-width: 400px) {
			font-size: 1rem;
			& > img {
				width: 1.5rem;
				height: 1.5rem;
				margin-left: 0.5rem;
			}
		}
	}
	& > .ProfileImage {
		@media (max-width: 768px) {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
		}
	}
	& > :last-child {
		@media (max-width: 768px) {
			width: 100%;
		}
	}
	@keyframes profileImg {
		0% {
			border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
		}
		50% {
			border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
		}
		100% {
			border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
		}
	}
`;

const TypingText = ({
	text,
	onFinishTyping,
}: {
	text: string;
	onFinishTyping: () => void;
}) => {
	const [typedText, setTypedText] = useState("");
	const [currentText, setCurrentText] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTypedText((prev) => prev + text[currentText]);
			setCurrentText((prev) => prev + 1);
		}, 70);
		if (currentText === text.length) {
			clearInterval(interval);
			onFinishTyping();
		}
		return () => clearInterval(interval);
	}, [text, currentText]);
	return <>{typedText}</>;
};

const Profile = () => {
	const [showGif, setShowGif] = useState(false);

	const handleTypingFinish = () => {
		setShowGif(true);
	};

	return (
		<ProfileContainer>
			<h1>
				<TypingText
					text="Hi, I'm SAOUAB Mohamed"
					onFinishTyping={handleTypingFinish}
				/>
				{showGif && <img src={HiHand} />}
			</h1>
			<div className="ProfileImage">
				<ProfileImage />
			</div>
			<TextProfile />
			{/* <SkillsSection /> */}
		</ProfileContainer>
	);
};

export default Profile;
