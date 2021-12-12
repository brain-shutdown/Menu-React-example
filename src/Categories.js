import React from 'react';

const Categories = ({ categories, setCategory }) => {
	return (
		<ul className='btn-container'>
			{categories.map((category, index) => {
				return (
					<li key={index + 1} className='filter-btn' onClick={() => setCategory(category)}>
						{category}
					</li>
				);
			})}
		</ul>
	);
};

export default Categories;
