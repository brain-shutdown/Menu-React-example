import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories] = useState(allCategories);

	const setCategory = (category) => {
		setMenuItems(() => {
			if (category === 'all') {
				return items;
			}
			return items.filter((food) => food.category === category);
		});
	};

	return (
		<main>
			<section className='menu section'>
				<header className='title'>
					<h2>Our menu</h2>
					<div className='underline'></div>
				</header>
				<Categories categories={categories} setCategory={setCategory} />
				<Menu menuItems={menuItems} />
			</section>
		</main>
	);
}

export default App;
