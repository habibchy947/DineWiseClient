import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const data = useLoaderData()
    return (
        <div>
            <h2>Data : {data.foodName}</h2>
        </div>
    );
};

export default FoodDetails;