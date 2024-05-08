import React from 'react';
import { useState } from 'react';

const MenuItem = ({ item, setCurrentItem }) => {
    return (
        <div onClick={() => setCurrentItem(item)} style={{ cursor: 'pointer' }}>
            <p>{item.name} - ${item.price}</p>
        </div>
    );
};

export default MenuItem;
