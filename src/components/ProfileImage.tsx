import { Skeleton, Stack } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import itsme from "/me.jpg";

const ImgStyle = styled.div`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	border: 6px solid rgba(128, 128, 128, 0.5);
	& > img {
		width: 100%;
		height: 100%;
		max-width: 100%;
		object-fit: cover;
		object-position: top;
		border-radius: 50%;
	}
	@media (max-width: 400px) {
		width: 200px;
		height: 200px;
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
						width={300}
						height={300}
					></Skeleton>
				</Stack>
			)}
			<img
				src={itsme}
				alt="Saouab Mohamed"
				width={300}
				height={300}
				onLoad={() => setLoading(false)}
				onError={() => setLoading(true)}
				style={{ display: loading ? "none" : "block" }}
			/>
		</ImgStyle>
	);
};

export default ProfileImage;
