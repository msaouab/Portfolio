import styled from "styled-components";

const TextContainer = styled.article`
	width: 520px;
	height: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 0.7rem;
	line-height: 1.3rem;
	& > p {
		& > a {
			color: #ff5f56;
			text-decoration: none;
			border-bottom: 1px solid #ff5f56;
		}
	}
	@media (max-width: 768px) {
		width: 80%;
	}
`;

const TextProfile = () => {

	return (
		<TextContainer className="">
			<p>
				I'm SAOUAB Mohamed Full-Stack Developer at @ Alpha10X, Student at 1337 Coding School khouribga - Um6p (42
				Network)
			</p>
			<p>
				I recently started working to build my career and publish my recent
				projects here. If you like to find out more about this coding school and
				its exceptional education model:{" "}
				<a href="https://1337.ma/en/" target="_blanc" rel="noopener noreferrer">
					1337 Coding School
				</a>
				! or{" "}
				<a
					href="https://42.fr/en/homepage/"
					target="_blanc"
					rel="noopener noreferrer"
				>
					42 School
				</a>
				!
			</p>
		</TextContainer>
	);
};

export default TextProfile;
