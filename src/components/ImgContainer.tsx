import { useState } from "react";
import styled from "styled-components";

const ImgStyle = styled.div`
	width: 50%;
	padding: 1rem;
	.ImgBackground {
		border: 1px solid #000;
		height: 350px;
		width: 100%;
		overflow: hidden;
		border-radius: 1.7rem;
		& > img {
			width: 350px;
			border-radius: 10px;
			width: 100%;
			object-fit: cover;
			transform: translateY(0%);
			transition: transform 10s ease-in-out 0s;
			height: auto;
			border-radius: 1.7rem;
			background-color: #76767633;
			box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
			&:hover {
				transform: translateY(calc(-100% + 350px));
			}
		}
	}
	@media (max-width: 400px) {
		width: 80%;
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
