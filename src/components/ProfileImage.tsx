import { Skeleton, Stack } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import msaouab from "../assets/itMe.png";

const ImgStyle = styled.div`
	width: 400px;
	height: 400px;
	& > img {
		width: 100%;
		height: 100%;
		border: 4px solid rgba(0, 0, 0, 0.6);
		animation: profileImg 5s infinite;
		transition: all 1s ease-in-out;
		position: relative;
		object-fit: cover;
		object-position: top;
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
