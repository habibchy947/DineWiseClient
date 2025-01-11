import axios from 'axios';
import React from 'react';
import FoodCard from '../../AllFoods/FoodCard/FoodCard';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FaArrowRight } from "react-icons/fa";
import Loading from '../../../Shared/Loading';
const TopFoods = () => {
    const { data: foods = [], isLoading} = useQuery({
        queryKey: ['foody'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/allFoods?top=true&limit=8`)
            return data
        }
    })
    return (
        <div className='w-11/12 mx-auto pt-20'>
            <h2 className='text-4xl font-bold text-center'><span className='text-orange-500'>Best Selling</span> Food</h2>
            <p className='text-center text-lg mt-5'>Explore our most popular dishes, loved for their taste and quality</p>
            {isLoading && <Loading></Loading>}
            <div
            className='pt-12 pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-4'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            <Link to='/all-foods'><button className='h-fit text-white w-fit px-[3em] py-[0.25em] border-[1px] rounded-md bg-orange-400 flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]'><p>See All </p><FaArrowRight /></button></Link>
        </div>
    );
};

export default TopFoods; 1