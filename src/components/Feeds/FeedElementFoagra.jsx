import React, { useState } from 'react'
import '../../styles/Products/Feeds/ElementFeeds/ElementFeeds.css'
import cat from '../../images/Products/Feeds/Cat.png'
const FeedElementFoagra = () => {
	const [elementSelected, setElementSelected] = useState(false)
	const [elementDisabled, setElementDisabled] = useState(false)
	const [elementHoverEnabled, setElementHoverEnabled] = useState(true)
	let FeedElementClass = ['feeds__element', 'element-feeds']
	const packageVars = {
		taste: "с фуа-гра",
		quantity: "10",
		bonus: "мышь в подарок",
		weight: "0,5",
		description: "Чего сидишь? Порадуй котэ, ",
		link: "купи."
	}
	if (elementHoverEnabled) {
		FeedElementClass.push('activeHover')
	}
	if (elementSelected) {
		FeedElementClass.push('selected')
		packageVars.description = "Печень утки разварная с артишоками."
		packageVars.link = null
	}
	if (elementDisabled) {
		FeedElementClass = ['feeds__element', 'element-feeds']
		FeedElementClass.push('disabled')
		packageVars.description = "Печалька, с фуа-гра закончился."
		packageVars.link = null
	}
	return (
		<div className={FeedElementClass.join(' ')}>
			<div className="element-feeds__pakage-wrapper"
				onMouseOut={() => { setElementHoverEnabled(true) }}>
				<section className="element-feeds__package package"
					onMouseOut={(e) => { e.stopPropagation() }}
					onContextMenu={(e) => { e.preventDefault(); setElementDisabled(!elementDisabled) }}
					onClick={() => { setElementSelected(!elementSelected); setElementHoverEnabled(false); }}>
					<div className="package__text text">
						<span className="package__adjective">Сказочное заморское яство</span>
						<h2 className="package__title">Нямушка <span className="package__taste">{packageVars.taste}</span></h2>
						<div className="package__size">
							<span className="package__quantity">{packageVars.quantity}</span> порций
							<span className="package__bonus">{packageVars.bonus}</span>
						</div>
					</div>
					<img className="package__image" src={cat} alt="" />
					<div className="package__circle circle">
						<div className="circle__weight">
							<span className="circle__number">{packageVars.weight}</span>
							кг
						</div>
					</div>
				</section>
			</div>
			<div className="element-feeds__description description">
				<span>{packageVars.description}
					<button className="element-feeds__button" onClick={(e) => {
						e.preventDefault();
						setElementSelected(!elementSelected)
					}}>
						{packageVars.link}
					</button>
				</span>
			</div>
		</div>
	)
}

export default FeedElementFoagra