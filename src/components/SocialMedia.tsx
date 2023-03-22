import	{ useEffect, useState } from 'react'
import	github from '../assets/github.svg'
import	instagram from '../assets/instagram.svg'
import	linkedin from '../assets/linkedin.svg'
import	email from '../assets/email.svg'
import	telegram from '../assets/telegram.svg'
import	twitter from '../assets/twitter.svg'
import	whatsapp from '../assets/whatsapp.svg'
import styled from 'styled-components'
import './SocialMedia.css'

const listSocialmedia = [
	{
		id: 0,
		link: "mailto:saouab.mohammed@gmail.com",
		name: "Mail",
		cls: "Mail",
		icon: email,
	},
	{
		id: 1,
		link: "https://github.com/msaouab",
		name: "Github",
		cls: "Github",
		icon: github,
	},
	{
		id: 2,
		link: "https://www.linkedin.com/in/msaouab/",
		name: "Linkedin",
		cls: "Linkedin",
		icon: linkedin,
	},
	{
		id: 3,
		link: "https://twitter.com/msaouab",
		name: "Twitter",
		cls: "Twitter",
		icon: twitter,
	},
	{
		id: 4,
		link: "https://www.instagram.com/themedsaouab/",
		name: "Instagram",
		cls: "Instagram",
		icon: instagram,
	},
	{
		id: 5,
		link: "https://wa.me/qr/EUWI4W2PDJJOF1",
		name: "Whatsapp",
		cls: "Whatsapp",
		icon: whatsapp,
	},
	// {
	// 	id: 6,
	// 	link: "https://wa.me/qr/EUWI4W2PDJJOF1",
	// 	name: "Telegram",
	// 	cls: "Telegram",
	// 	icon: telegram,
	// }
]

const	SocialMedia = () => {
	const [isHover, setIsHover] = useState(0);
	const hoverOn = (id: number) => {
		setIsHover(id);
	}
	const hoverOut = () => {
		setIsHover(0);
	}
	
	return (
		<div className='media'>
		{
			listSocialmedia.map((el, i) => {
				const {id, link, cls, name, icon} = el;
				return (
						<a href={link} className={cls} key={i}
						onMouseEnter={() => hoverOn(id)}
						onMouseLeave={hoverOut}>
							<img src={icon} alt={name} />
							{isHover === id && <span>{name}</span>}
						</a>
					)
				})
			}
		</div>
	)
}

export default SocialMedia
