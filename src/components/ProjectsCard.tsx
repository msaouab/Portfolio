import styled from "styled-components";
import OverView from "/Overview.jpg";

const CradsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	& > img {
		width: 400px;
	}
	& > a {
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
	const { name, technologies, img, link } = project.project;
	return (
		<CradsContainer>
			<img src={OverView} alt={name} />
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
