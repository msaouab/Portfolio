import { Skeleton, Stack } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const ImgStyle = styled.div`
	.ImgBackground {
		height: 300px;
		width: 100%;
		overflow: hidden;
		border-radius: 8px;
		border: 1px solid #76767633;
		& > img {
			width: 100%;
			object-fit: contain;
			object-position: center;
			transform: translateY(0%);
			transition: transform 10s ease-in-out 0s;
			height: auto;
			background-color: #76767633;
			box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
			&:hover {
				transform: translateY(calc(-100% + 350px));
			}
		}
	}
	@media (max-width: 400px) {
		/* width: 80%; */
		/* height: 500px; */
	}
`;

export const ImgContainer = ({
	source,
	alt,
}: {
	source: string;
	alt?: string;
}) => {
	const [loading, setLoading] = useState<boolean>(true);

	const handleLoad = () => {
		setLoading(false);
	};

	const handleError = () => {
		setLoading(false);
	};

	return (
		<ImgStyle>
			<div className="ImgBackground">
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
					src={source}
					alt={alt}
					onLoad={handleLoad}
					onError={handleError}
					style={{ display: loading ? "none" : "block" }}
				/>
			</div>
		</ImgStyle>
	);
};
