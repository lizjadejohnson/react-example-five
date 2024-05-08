import React from 'react'
import { useState } from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ sectionTitle, setCurrentItem }) => {
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`/food/subtype/${sectionTitle}`); // Adjust endpoint as necessary
            if (response.ok) {
                const data = await response.json();
                setItems(data.foods); // Adjust according to your actual API response
            } else {
                throw new Error('Failed to fetch data');
            }
    };

    return (
        <div className='sectionContainer'>
            <h2 onClick={fetchData}>{sectionTitle}</h2> {/* Clicking the section title fetches data */}
            {items.map(item => (
                <MenuItem key={item._id} item={item} setCurrentItem={setCurrentItem} />
            ))}
        </div>
    );
};

export default MenuSection;
