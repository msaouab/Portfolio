import styled from "styled-components";
import SkillsData from "../data/SkillsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListSkills = styled.div`
	color: #fff;
	display: flex !important;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	& > img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		@media (max-width: 768px) {
			width: 3rem;
			height: 3rem;
		}
	}
	& > p {
		color: #fff;
		font-size: 1.2rem;
	}
`;

const SkillsStyle = styled.div`
	background-color: #1a2540;
	color: #fff;
	height: 100px;
	display: flex !important;
	justify-content: center;
	align-items: center;
	max-width: 100vw;
	width: 100%;
	overflow: hidden;
	padding: 2rem 0;
	& > .sliderContainer {
		max-width: 1200px;
		width: 100%;
	}
	@media (max-width: 768px) {
		padding: 1rem 0;
	}
`;

const SampleArrow = () => {
	return (
		<div
			style={{
				display: "none",
			}}
		/>
	);
};

const SkillsBar = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		nextArrow: <SampleArrow />,
		prevArrow: <SampleArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 868,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<SkillsStyle className="">
			<Slider {...settings} className="sliderContainer">
				{SkillsData.map((skill, index) => (
					<ListSkills className="list" key={index}>
						<img src={skill.icon} alt={skill.name} />
						<p>{skill.name}</p>
					</ListSkills>
				))}
			</Slider>
		</SkillsStyle>
	);
};

export default SkillsBar;
