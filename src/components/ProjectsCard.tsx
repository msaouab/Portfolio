import { useEffect, useState } from "react";
import styled from "styled-components";
import Testing from "../assets/ProjectsImg/testingGIf.gif";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	& > .cards {
		border: 3px solid #ffffff;
		width: 400px;
		height: 300px;
		& > img {
			width: 100%;
			height: 90%;
			object-fit: cover;
		}
		background-color: #694538;
		& > .project-tile {
			width: 400px;
			text-align: center;
			color: #fff;
			text-decoration: none;
			padding: 0.8rem 0;
			.code {
				color: transparent;
				transition: color 0.3s ease-out;
				margin: 0 0.2rem;
			}
		}
		& > .project-tile:hover .code {
			color: orange;
		}
	}
	@media (max-width: 500px) {
		.cards {
			width: 90%;
		}
	}
`;

const ProjectsCard = (project: any, key: number) => {
	const { name, img, link } = project.project;
	const [findImg, setFindImg] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (!img) setFindImg(Testing);
		else setFindImg(img);
	}, [img]);

	const handleLoad = () => {
		setLoading(false);
	};
	const handleError = () => {
		setLoading(true);
		setFindImg(Testing);
	};

	return (
		<CardsContainer>
			{loading && (
				<Stack spacing={1}>
					<Skeleton
						variant="rounded"
						width={400}
						height={300}
					></Skeleton>
				</Stack>
			)}
			<div
				onLoad={handleLoad}
				onError={handleError}
				className="cards"
				style={{ display: loading ? "none" : "block" }}
			>
				<img src={findImg} alt={name} />
				<a className="project-tile" href={link} target="_blank">
					<p className="project-title">
						<span className="code">&lt; </span>
						{name}
						<span className="code"> &#47;&gt;</span>
					</p>
				</a>
			</div>
		</CardsContainer>
	);
};

export default ProjectsCard;
