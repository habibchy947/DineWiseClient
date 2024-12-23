import React from 'react';

const FoodCard = ({ food }) => {
    const { foodName, foodPhoto, category, origin, quantity, price, description, addBy } = food || {}

    return (
        <div className="card shadow-xl dark:shadow-2xl">
            <figure className=''>
                <img
                    className='object-cover h-72 md:h-60 w-full'
                    src={foodPhoto}
                    alt="Shoes" />
            </figure>
            <div className="card-body p-3">
                <h2 className="card-title text-xl mb-0 font-bold">{foodName}</h2>
                <p className='flex items-center gap-1 mb-0'><span className='font-semibold'>Stock :</span><span className='badge py-1 text-center badge-secondary font-bold text-xl'> {quantity}</span></p>
                <div className="card-actions items-center justify-end mt-0">
                    <p className='flex items-center gap-1'><span className='font-semibold'>Price :</span><span className='text-center font-bold text-3xl text-orange-500'> {price}$</span></p>
                    <button className="btn bg-orange-400 border-none text-white">Details</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;