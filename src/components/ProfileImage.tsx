import { useState } from "react";
import styled from "styled-components";
import { Skeleton, Stack } from "@mui/material";
import msaouab from "../assets/itMe.png";

const ImgStyle = styled.div`
	width: 400px;
	height: 400px;
	animation: profileImg 5s infinite;
	border: 4px solid rgba(0, 0, 0, 0.6);
	position: relative;
	text-align: center;
	overflow: hidden;
	& > img {
		width: 100%;
		height: 100%;
		transition: all 1s ease-in-out;
		cursor: zoom-in;
		&:hover {
			transform: scale(1.1);
		}
	}
	@media (max-width: 768px) {
		width: 50%;
		height: 50%;
	}
	@media (max-width: 400px) {
		width: 70%;
		height: 70%;
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
	const [loading, setLoading] = useState(true);

	return (
		<ImgStyle>
			{loading && (
				<Stack spacing={1}>
					<Skeleton
						variant="circular"
						width={400}
						height={400}
					></Skeleton>
				</Stack>
			)}
			<img
				src={msaouab}
				alt="Saouab Mohamed"
				width={400}
				height={400}
				onLoad={() => setLoading(false)}
				onError={() => setLoading(true)}
				style={{ display: loading ? "none" : "block" }}
			/>
		</ImgStyle>
	);
};

export default ProfileImage;
