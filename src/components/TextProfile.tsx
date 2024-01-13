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
		<TextContainer>
			<p>
				I'm SAOUAB Mohamed, a Full-Stack Developer at Alpha10X, and a
				student at 1337 Coding School in Khouribga - UM6P (42 Network),
				Morocco.
			</p>
			<p>I build digital experiences, and I love what I do.
				I recently started working to build my career and publish my
				recent projects here. If you would like to find out more about
				this coding school and its exceptional education model:{" "}
				<a
					href="https://1337.ma/en/"
					target="_blank"
					rel="noopener noreferrer"
				>
					1337 Coding School
				</a>{" "}
				or{" "}
				<a
					href="https://42.fr/en/homepage/"
					target="_blank"
					rel="noopener noreferrer"
				>
					42 School
				</a>
				.
			</p>
		</TextContainer>
	);
};

export default TextProfile;
