import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineArrowOutward } from "react-icons/md";
const FoodCard = ({ food}) => {
    const { foodName, foodPhoto, category, origin, quantity, price, description, addBy, _id } = food || {}

    return (
        <div
         className="card shadow-xl rounded-md bg-white dark:bg-gray-950">
            <figure className=''>
                <img
                    className='object-cover h-80 md:h-72 w-full transform transition-transform duration-300 inset-0 hover:scale-110'
                    src={foodPhoto}
                    alt="Shoes" />
            </figure>
            <div className="card-body p-3 space-y-1">
                <h2 className="card-title text-xl mb-0 font-bold">{foodName}</h2>
                <p className='flex mb-0 justify-between'><span>{category}</span><span className='badge py-1 text-center badge-secondary font-bold text-xl'> {quantity}</span></p>
                <div className="card-actions items-center justify-end mt-0">
                    <p className='mb-0 text-3xl font-semibold'>${price}</p>
                    {/* <p className='flex items-center gap-1'><span className='font-semibold'>Price :</span><span className='text-center font-bold text-3xl text-orange-500'> {price}$</span></p> */}
                    <Link to={`/foodDetails/${_id}`}><button className=" py-1 bg-orange-400 flex items-center border-none select-none rounded-md  px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 gap-2 disabled:shadow-none group">Details<span className='text-xl hidden group-hover:block'><MdOutlineArrowOutward /></span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;