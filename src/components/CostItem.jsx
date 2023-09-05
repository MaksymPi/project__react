import React from 'react';

import './CostItem.css';

export default function CostItem() {
    return (
        <div className='cost-item'>
            <div>March 2021 12</div>
            <div className='cost-item__description'>
                <h2>Fridge</h2>
                <div className='cost-item__price'>$999.99</div>
            </div>
        </div>

    )
}
