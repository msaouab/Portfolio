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
	text-align: center;
	& > img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
	}
	& > p {
		color: #fff;
		font-size: 1.2rem;
		margin-top: 1rem;
	}
`;

const SkillsStyle = styled.div`
	background-color: #1a2540;
	color: #fff;
	height: 100px;
	padding: 2rem;
	width: 100%;
	display: flex !important;
	justify-content: center;
	align-items: center;
	& > .sliderContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5rem;
		width: 1200px;
		height: 100px;
		border: 1xp solid red;
		& > .list {
		}
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

const SkillsSection = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <SampleArrow />,
		prevArrow: <SampleArrow />,
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

export default SkillsSection;
