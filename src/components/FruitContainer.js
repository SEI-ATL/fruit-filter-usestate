import React, { useState } from 'react';

// Components
import List from './List';
import Input from './Input';

function FruitContainer(props) {
    const [fruits, setFruits] = useState({ fruitsToDisplay: props.fruits, filterValue: '' });

    const handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value;
        
        // Remove the fruits that don't contain the filter value
        const filteredFruitList = props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase());

            // Another way to write the above statment
            // if (fruit.toLowerCase() === filterValue.toLowerCase()) {
            //     return true;
            // }
        });

        setFruits({ fruitsToDisplay: filteredFruitList, filterValue });
    }
    return (
        <div>
            <Input value={fruits.filterValue} onChange={handleFilterChange}/>
            <List fruits={fruits.fruitsToDisplay}/>
        </div>
    );
}

export default FruitContainer;