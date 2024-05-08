import React from 'react';


const CurrentItem = ({ currentItem }) => {
    return (
        <div className='currentSelection'>
            <h2>Current Selection</h2>
            <p>{currentItem.name} - ${currentItem.price}</p>
            <p>{currentItem.description}</p>
        </div>
    );
};

export default CurrentItem;
