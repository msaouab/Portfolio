import styled from "styled-components";
import { ImgContainer } from "../components/ImgContainer";
import CarrierData from "../data/CarrierData";

const CarrierContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	gap: 5rem;
	margin: 0 auto;
	& > .carrier {
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		& > section {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 2rem;
			& > article {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				gap: 2rem;
				& > aside {
					display: flex;
					flex-direction: column;
					justify-content: center;
					& > .companyName {
						text-decoration: none;
						color: black;
						font-size: 1.1rem;
						font-weight: 900;
					}
					& > .jobTitle {
						font-size: 1.1rem;
						font-weight: 500;
					}
					& > .jobPeriod {
						font-size: 1rem;
						font-weight: 500;
					}
					& > .jobLocation {
						font-size: 1rem;
						font-weight: 500;
					}
				}
				& > .jobDescription {
					font-size: 1rem;
					font-weight: 400;
					line-height: 1.5rem;
					color: gray;
				}
			}
		}
	}
`;

const Carrier = () => {
	return (
		<CarrierContainer>
			{CarrierData.map((carrier, index) => (
				<div className="carrier " key={index}>
					<ImgContainer source={carrier.img} />
					<section>
						<article>
							<aside>
								<a href={carrier.companyLink} target="_blank" className="companyName">
									{carrier.companyName}
								</a>
								<p className="jobTitle">{carrier.jobTitle}</p>
							</aside>
							<aside>
								<p className="jobPeriod">{carrier.jobPeriod}</p>
								<p className="jobLocation">
									{carrier.jobLocation}
								</p>
							</aside>
						</article>
						<article>
							<p className="jobDescription">
								{carrier.jobDescription}
							</p>
							<p className="jobRole">{carrier.role}</p>
						</article>
					</section>
				</div>
			))}
		</CarrierContainer>
	);
};

export default Carrier;
