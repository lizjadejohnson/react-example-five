import React from 'react';
import { useState } from 'react';

//For an individual menu item, if it is clicked (onClick), then setCurrentItem sets it as the CurrentItem to be used back in the Menu component

const MenuItem = ({ item, setCurrentItem }) => {
    return (
        <div onClick={() => setCurrentItem(item)} style={{ cursor: 'pointer' }}>
            <p>{item.name} - ${item.price}</p>
        </div>
    );
};

export default MenuItem;
