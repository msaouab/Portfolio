import styled from "styled-components";
import OverView from '/Overview.jpg'

const CradsContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	& > img {
		width: 300px;
	}
`;

const	ProjectsCard = ( project: any, key: number ) => {
	const { name, technologies, img } = project.project;
	return (
		<CradsContainer>
			<img src={OverView} alt={name} />
			<h3>{name}</h3>
		</CradsContainer>
	)
};

export default ProjectsCard;