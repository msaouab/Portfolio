import { Skeleton, Stack } from "@mui/material";
import { useState } from "react";
import styled, { css } from "styled-components";

type ImgSize = {
	$imgsize: string;
};

const ImgStyle = styled.div<ImgSize>`
	.ImgBackground {
		height: 300px;
		width: 100%;
		height: ${(props) => (props.$imgsize === "fixed" ? "100%" : "")};
		overflow: hidden;
		border-radius: 6px;
		border: 1px solid #a7a7a7;
		& > img {
			width: 100%;
			height: ${(props) => (props.$imgsize === "fixed" ? "100% !important" : "")};
			object-fit: cover;
			object-position: center;
			transform: translateY(0%);
			height: auto;
			background-color: #76767633;
			box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
			${(props) =>
				props.$imgsize === "scrollable" &&
				css`
					transition: transform 10s ease-in-out 0s;
					&:hover {
						transform: translateY(calc(-100% + 350px));
					}
				`}
		}
	}
`;

export const ImgContainer = ({
	source,
	alt,
	imgType,
}: {
	source: string;
	alt?: string;
	imgType: "scrollable" | "fixed";
}) => {
	const [loading, setLoading] = useState<boolean>(true);

	const handleLoad = () => {
		setLoading(false);
	};

	const handleError = () => {
		setLoading(false);
	};

	return (
		<ImgStyle $imgsize={imgType}>
			<div className="ImgBackground">
				{loading && (
					<Stack spacing={1}>
						<Skeleton
							variant="rectangular"
							animation="wave"
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
