import styled from "styled-components";
import itsme from "/its_me.jpg";
import Background from "/Background.jpeg";
import SocialMedia from "./profile/SocialMedia";
import TextProfile from "./profile/TextProfile";

const ProfileContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	height: 100vh;
	/* background-image: url(${Background}); */
	background-size: cover;
	color: white;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url(${Background});
	& > hr {
		width: 3rem;
		height: 0.1rem;
		background-color: white;
		border: 1px solid white;
		border-radius: 1rem;
	}
`;

const ProfileImage = styled.div`
	background-image: url(${itsme});
	background-size: cover;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	border: 4px solid rgba(128, 128, 128, 0.5);
`;

const Profile = () => {

	return (
		<ProfileContainer>
			<ProfileImage />
			<h1 className="">Hi, I'm SAOUAB Mohamed</h1>
			<h2 className="">Software Engineer</h2>
			<hr className="" />
			<SocialMedia />
			<TextProfile />
		</ProfileContainer>
	);
};

export default Profile;
