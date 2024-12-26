import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from '../../AllFoods/FoodCard/FoodCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading';

const TopFoods = () => {
    const { data: foods = [], isLoading} = useQuery({
        queryKey: ['foody'],
        queryFn: async () => {
            const { data } = await axios.get(`https://dine-wise-server-pi.vercel.app/allFoods?top=true&limit=6`)
            return data
        }
    })
    return (
        <div className='w-11/12 mx-auto py-16'>
            <h2 className='text-4xl font-bold text-center'><span className='text-orange-500'>Top Selling</span> Food</h2>
            {isLoading && <Loading></Loading>}
            <div className='pt-12 pb-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-6'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <Link to='/all-foods'><button className='btn rounded-md border-none bg-orange-500 text-white text-lg font-semibold btn-wide'>See All</button></Link>
        </div>
    );
};

export default TopFoods; 1