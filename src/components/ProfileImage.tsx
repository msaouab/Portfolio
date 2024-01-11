import { useState } from "react";
import styled from "styled-components";

const ImgStyle = styled.div`
	width: 300px;
	height: 300px;
	border: 4px solid rgba(0, 0, 0, 0.6);
	animation: profileImg 5s infinite;
	transition: all 1s ease-in-out;
	position: relative;
	background: url("/me.jpg");
	background-size: cover;
	background-position: top;
	@media (max-width: 400px) {
		width: 200px;
		height: 200px;
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

const ProfileImage = () => {
	return <ImgStyle></ImgStyle>;
};

export default ProfileImage;
