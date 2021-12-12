import React from 'react';

const Menu = ({ menuItems }) => {
	return (
		<section className='section-center'>
			{menuItems.map((food) => {
				const { id, title, img, price, desc } = food;
				return (
					<article className='menu-item' key={id}>
						<img src={img} alt={title} className='photo' />
						<div className='item-info'>
							<header>
								<h4>{title}</h4>
								<h4 className='price'>${price}</h4>
							</header>
							<p className='item-text'>{desc}</p>
						</div>
					</article>
				);
			})}
		</section>
	);
};

export default Menu;
