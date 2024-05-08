import React from 'react';
import { useState } from 'react';
import MenuSection from './MenuSection';



const Menu = () => {
    const [currentItem, setCurrentItem] = useState(null);

  return (
    <div className='menuContainer'>
        <h1>Menu</h1>
            {currentItem && (
                <div>
                    <h2>Current Selection</h2>
                    <p>{currentItem.name} - ${currentItem.price}</p>
                    <p>{currentItem.description}</p>
                </div>
            )}
            <MenuSection sectionTitle="Appetizers" setCurrentItem={setCurrentItem}/>
            <MenuSection sectionTitle="Entrees" setCurrentItem={setCurrentItem}/>
            <MenuSection sectionTitle="Sides" setCurrentItem={setCurrentItem}/>
            <MenuSection sectionTitle="Desserts" setCurrentItem={setCurrentItem}/>
            <MenuSection sectionTitle="Drinks" setCurrentItem={setCurrentItem}/>
    </div>
  )
}

export default Menu
