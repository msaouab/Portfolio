import styled from "styled-components";
import { ImgContainer } from "../components/ImgContainer";
import CarrierData from "../data/CarrierData";
import { GoLinkExternal } from "react-icons/go";

const CarrierContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	gap: 5rem;
	margin: 0 auto;
	padding: 2rem;
	& > .carrier {
		border: 1px solid #eaeaea;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		gap: 1rem;
		padding: 2rem;
		& > .companyName {
			display: flex;
			gap: 0.1rem;
			color: black;
			font-size: 1.1rem;
			font-weight: 900;
		}
		& > aside {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			gap: 1rem;
			& > .jobTitle {
				font-size: 1.1rem;
				font-weight: 500;
			}
			& > .jobPeriod {
				font-size: 1rem;
				font-weight: 500;
			}
		}
		& > .jobRole {
			font-size: 1rem;
			font-weight: 500;
			line-height: 1.3;
		}
	}
	@media (max-width: 768px) {
		gap: 1rem;
		& > .carrier {
			padding: 1rem;
			& > .companyName {
				font-size: 1rem;
			}
			& > aside {
				flex-direction: column;
				gap: 0.5rem;
				& > .jobTitle {
					font-size: 1rem;
				}
				& > .jobPeriod {
					font-size: 0.9rem;
				}
			}
			& > .jobRole {
				font-size: 0.9rem;
			}
		}
	}
`;

const Carrier = () => {
	return (
		<CarrierContainer>
			{CarrierData.map((carrier, index) => (
				<article className="carrier" key={index}>
					<a
						href={carrier.companyLink}
						target="_blank"
						className="companyName"
					>
						{carrier.companyName} <GoLinkExternal />
					</a>
					<ImgContainer source={carrier.img} imgType="scrollable" />
					<aside>
						<p className="jobTitle">{carrier.jobTitle}</p>
						<p className="jobPeriod">{carrier.jobPeriod}</p>
					</aside>
					<p className="jobRole">{carrier.role}</p>
				</article>
			))}
		</CarrierContainer>
	);
};

export default Carrier;
