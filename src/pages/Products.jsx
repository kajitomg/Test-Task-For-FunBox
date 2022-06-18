import React from 'react'
import FeedElementChicken from '../components/Feeds/FeedElementChicken'
import FeedElementFish from '../components/Feeds/FeedElementFish'
import FeedElementFoagra from '../components/Feeds/FeedElementFoagra'
import '../styles/Products/Products.css'

const Products = () => {
	return (
		<section className="products">
			<h1 className="products__title title">Ты сегодня покормил кота?</h1>
			<section className="products__feeds feeds">
				<div className="feeds__row">
					<FeedElementFoagra />
					<FeedElementFish />
					<FeedElementChicken />
				</div>
			</section>
		</section>
	)
}

export default Products