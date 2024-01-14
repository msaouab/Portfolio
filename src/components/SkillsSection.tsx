import styled from "styled-components";
import SkillsData from "../data/SkillsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Shuffle } from "@mui/icons-material";
import { SkillsType } from "../_types/types";
import { useEffect, useState } from "react";

const ListSkills = styled.div`
	color: #fff;
	display: flex !important;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	& > img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
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
	padding: 2rem;
	width: 100%;
	display: flex !important;
	justify-content: center;
	align-items: center;
	width: 100% !important;
	& > .sliderContainer {
		display: flex !important;
		justify-content: center;
		align-items: center;
		max-width: 1200px;
		@media (max-width: 1200px) {
			max-width: 1100px;
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
	const [shuffledSkills, setShuffledSkills] = useState<SkillsType[]>([]);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		nextArrow: <SampleArrow />,
		prevArrow: <SampleArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};
	const shuffle = (array: SkillsType[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	useEffect(() => {
		setShuffledSkills(shuffle(SkillsData));
	}, [SkillsData]);

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
