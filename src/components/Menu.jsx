import React from 'react';
import { useState } from 'react';
import MenuSection from './MenuSection';
import CurrentItem from './CurrentItem'



const Menu = () => {
    const [currentItem, setCurrentItem] = useState(null);

  return (
    <div className='menuContainer'>
        <h1>Menu</h1>
        {/* If there is a currentItem, display it otherwise don't */}
            {currentItem ? (<CurrentItem currentItem={currentItem}/>) : null}
            <MenuSection sectionTitle="Appetizers" setCurrentItem={setCurrentItem} />
            <MenuSection sectionTitle="Entrees" setCurrentItem={setCurrentItem} />
            <MenuSection sectionTitle="Sides" setCurrentItem={setCurrentItem} />
            <MenuSection sectionTitle="Desserts" setCurrentItem={setCurrentItem} />
            <MenuSection sectionTitle="Non-Alcoholic" setCurrentItem={setCurrentItem} />
            <MenuSection sectionTitle="Alcoholic" setCurrentItem={setCurrentItem} />
            
    </div>
  )
}

export default Menu
