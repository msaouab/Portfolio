import { useEffect, useState } from "react";
import styled from "styled-components";
import { ImgContainer } from "./ImgContainer";
import { SkillsCard } from "./SkillsCard";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const CardsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	text-align: center;
	gap: 2rem;
	width: 100%;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	border-radius: 1rem;
	& > .projectInfo {
		padding: 1rem;
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		text-align: center;
		& > .projectName {
		}
		& > .projectDescription {
		}
		& > .links {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			width: 100%;
			& > a {
				padding: 1rem;
				color: var(--text-color);
				display: flex;
				justify-content: center;
				gap: 0.3rem;
				text-decoration: none;
				font-weight: 700;
				position: relative;
				& > .b {
					position: absolute;
					background: var(--text-color);
					transition: 0.5s;
				}
				& > .b1,
				.b4 {
					width: 25%;
					height: 3px;
				}
				& > .b2,
				.b3 {
					height: 40%;
					width: 3px;
				}
				& > .b3,
				.b4 {
					bottom: 0;
					right: 0;
				}
				& > .b1,
				.b2 {
					top: 0;
					left: 0;
				}

				&:hover {
					& > .b1,
					.b4 {
						width: 100%;
					}
					& > .b2,
					.b3 {
						height: 100%;
					}
				}
				&:active {
					transform: scale(1.1);
					box-shadow: 0.1px 0.1px 2px var(--text-color);
				}
			}
		}
	}
`;

const ProjectsCard = (project: any, key: number) => {
	const { name, image, demo, code, icon, description, skills } =
		project.project;

	return (
		<CardsContainer className="">
			<ImgContainer source={image} alt={name} />
			<div className="projectInfo">
				<h3 className="projectName">
					{name} <span className="icon">{icon}</span>
				</h3>
				<p className="projectDescription">{description}</p>
				<SkillsCard skills={skills}></SkillsCard>
				<div className="links">
					<a href={code} target="_blank">
						<FaGithub />
						Code
						<span className="b b1"></span>
						<span className="b b2"></span>
						<span className="b b3"></span>
						<span className="b b4"></span>
					</a>
					<a href={demo} target="_blank">
						<GoLinkExternal />
						Demo
						<span className="b b1"></span>
						<span className="b b2"></span>
						<span className="b b3"></span>
						<span className="b b4"></span>
					</a>
				</div>
			</div>
		</CardsContainer>
	);
};

export default ProjectsCard;
