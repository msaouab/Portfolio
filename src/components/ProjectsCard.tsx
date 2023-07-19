import { useEffect, useState } from "react";
import styled from "styled-components";
import Testing from "../assets/ProjectsImg/TestingGIF.gif";

const CradsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	& > img {
		width: 400px;
		border: 3px solid #ffffff;
		border-bottom: none;
	}
	& > a {
		border: 3px solid #ffffff;
		border-top: none;
		width: 400px;
		text-align: center;
		color: #fff;
		text-decoration: none;
		background-color: #694538;
		padding: 0.8rem 0;
		.code {
			color: transparent;
			transition: color 0.3s ease-out;
			margin: 0 0.2rem;
		}
	}
	.project-tile:hover .code {
		color: orange;
	}
	@media (max-width: 500px) {
		& > img {
			width: 90%;
		}
		& > a {
			width: 90%;
		}
	}
`;

const ProjectsCard = (project: any, key: number) => {
	const { name, img, link } = project.project;
	const [findImg, setFindImg] = useState<string>("");

	useEffect(() => {
		if (!img)
			setFindImg(Testing);
		else
			setFindImg(img);
	}, [img]);

	return (
		<CradsContainer>
			<img src={findImg} alt={name} />
			<a className="project-tile" href={link} target="_blank">
				<p className="project-title">
					<span className="code">&lt; </span>
					{name}
					<span className="code"> &#47;&gt;</span>
				</p>
			</a>
		</CradsContainer>
	);
};

export default ProjectsCard;
