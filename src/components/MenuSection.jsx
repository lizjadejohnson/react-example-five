import React from 'react'
import { useState } from 'react';
import MenuItem from './MenuItem';

// Our child MenuSection takes in the sectionTitle and the ability to setCurrentItem
const MenuSection = ({ sectionTitle, setCurrentItem }) => {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);  // State to track if the section is open or closed

    //Function to toggle whether items show up inside our section and then gets the items:
    const toggleItems = async () => {
        if (items.length > 0) {
            setIsOpen(!isOpen);
        } else {
            let type;
            if (sectionTitle !== 'Alcoholic' && sectionTitle !== 'Non-Alcoholic') {
                type = `food`;
            } else {
                type = `drink`;
            }

            try {
                const response = await fetch(`/${type}/subtype/${sectionTitle}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setItems(data[type + 's']);
                setIsOpen(true);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className='sectionContainer'>
            {/* The h2 serves as a toggle button for showing or hiding the items, with toggleItems (above ^) called on click. */}
            <h2 onClick={toggleItems}>{sectionTitle}</h2> {/* Toggle menu items appearing on title click */}
            {/* Conditional rendering is used to display items only if isOpen is true */}
            {isOpen ? items.map(item => (
                <MenuItem key={item._id} item={item} setCurrentItem={setCurrentItem} />
            )): null}
        </div>
    );
};

export default MenuSection;
