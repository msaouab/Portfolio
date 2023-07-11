import styled from "styled-components";
import alone from "./assets/alone.jpeg";
import compus from "./assets/compus.jpeg";
import compus_kh from "./assets/compus_kh.jpg";

const EduContainer = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 4rem;
	margin: 2rem;
	& > .s1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 60%;
		& > h1 {
			color: #ffffff;
		}
		& > h2 {
			color: #dcd4d4;
			font-size: 1rem;
		}
		& > p {
			color: #dad5d5;
			& > a {
				color: #00ff00;
				text-decoration: none;
				border-bottom: 1px solid #00ff00;
			}
		}
	}
	& > .s2 {
		border: 3px solid #ffffff;
		/* display: flex; */
		/* justify-content: center; */
		/* flex-wrap: wrap; */
		gap: 1rem;
		width: 60%;
		& > .iframe {
			height: 550px;
			& > iframe {
				width: 100%;
				height: 100%;
			}
		}
		& > article {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
			gap: 1rem;
			& > img {
				max-width: 100%;
				object-fit: cover;
				box-sizing: border-box;
				width: 250px;
			}
		}
	}
	@media (max-width: 768px) {
		& > .s1 {
			width: 90%;
		}
		& > .s2 {
			width: 100%;
		}
	}
`;

const Edu = () => {
	return (
		<EduContainer>
			<section className="s1">
				<h1>Education</h1>
				<h2>Software Engineer</h2>
				<br />
				<h2>
					1337 Coding School - Um6p (42NetWork)
					<span> | 2021 - to present</span>
				</h2>
				<br />
				<p>I recently student at 1337 Coding School.</p>
				<p>
					If you like to find out more about this coding school and
					its exceptional education model:{" "}
					<a
						href="https://1337.ma/en/"
						target="_blanc"
						rel="noopener noreferrer"
					>
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
			</section>
			<section className="s2">
				<div className="iframe">
					<iframe
						src="https://1337.ma/en/concept"
						frameBorder="0"
					></iframe>
				</div>
				{/* <article>
					<img src={alone} alt="" />
					<img src={compus_kh} alt="" />
					<img src={compus} alt="" />
				</article> */}
			</section>
		</EduContainer>
	);
};

export default Edu;
