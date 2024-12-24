import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
    const food = useLoaderData()
    const { foodName, foodPhoto, category, origin, quantity, price, description, addBy, _id, purchase_count } = food || {}

    return (
        <div >
            <div className='bg-allFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>Food Details</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 rounded-lg shadow-xl w-11/12 lg:w-10/12 mx-auto my-14'>
                <div className='rounded-l-md overflow-hidden'>
                    <img className='object-cover sm:h-full transform transition-transform duration-300 inset-0 hover:scale-110' src={foodPhoto} alt="" />
                </div>
                <div className='space-y-4 p-4'>
                    <h2 className='text-4xl font-semibold'>{foodName}</h2>
                    <p>
                        <span className='font-semibold'>Category : </span>
                        <span className='badge rounded-sm px-6 text-orange-500 py-1 bg-slate-100 dark:bg-gray-800 border-none'>{category}</span>
                    </p>
                    <div className='space-y-1 flex items-center gap-5 md:items-start md:gap-0 md:block '>
                        <p className='flex items-center gap-2'>
                            <span className='font-semibold'>Origin : </span>
                            <span className=''>{origin}</span>
                        </p>
                        <p className='flex items-center gap-2'>
                            <span className='font-semibold'>Price : </span>
                            <span className=' text-orange-500 text-4xl font-bold'>{price} $</span>
                        </p>
                    </div>
                    <div className='space-y-2 flex items-center gap-20 md:items-start md:gap-0 md:block '>
                        <p className='flex items-center gap-1 mb-0'><span className='font-semibold'>Stock :</span><span className='badge py-1 text-center badge-secondary font-bold text-xl'> {quantity}</span></p>
                        <p className='flex items-center gap-1 mb-0'><span className='font-semibold'>Purchased :</span><span className='badge py-1 text-center bg-orange-500 text-white font-bold text-xl'> {purchase_count}</span></p>
                    </div>

                    <p className='font-semibold'>Description :
                    </p>
                    <span className=''>{description}</span>
                    <div>
                        <Link>
                            <button className='btn bg-orange-500 border-none text-white rounded-md'>
                                Purchase
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;