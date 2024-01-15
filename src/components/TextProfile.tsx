import styled from "styled-components";

const TextContainer = styled.article`
	width: 520px;
	height: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
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
				I'm SAOUAB Mohamed, a junior full-stack developer and a software
				developer student at{" "}
				<a
					href="https://1337.ma/en/"
					target="_blank"
					rel="noopener noreferrer"
				>
					1337
				</a>{" "}
				Coding School- UM6P{" "}
				<a
					href="https://www.42network.org/"
					target="_blank"
					rel="noopener noreferrer"
				>
					42 Network
				</a>{" "}
				in Khouribga, Morocco.
			</p>
			<p>I build digital experiences, and I love what I do.</p>
			<p>
				I recently started working to build my career and publish my
				recent projects here.
			</p>
		</TextContainer>
	);
};

export default TextProfile;
