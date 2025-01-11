import axios from 'axios';
import React, { useState } from 'react';
import FoodCard from './FoodCard/FoodCard';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';

const AllFoods = () => {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [filter, setFilter] = useState('')
    console.log(filter)
    const { data: foods = [], isPending, refetch } = useQuery({
        queryKey: ['foods', search, sort, filter],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/allFoods?search=${search}&sort=${sort}&filter=${filter}`)
            return data
        },
        enabled: true
    })
    return (
        <div>
            <div className='bg-allFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>All Food</h3>
            </div>
            {/* search */}
            <div className='w-11/12 mx-auto min-h-screen'>
                <div className='flex flex-wrap items-center gap-2 md:gap-10 md:justify-center'>
                    <div>
                        <select
                         name='sort' 
                         defaultValue='default' 
                         onChange={e => {
                            setSort(e.target.value)
                            refetch()
                        }}
                         className="select select-bordered w-full max-w-2xl dark:bg-gray-950 join-item">
                            <option disabled value='default'>Sort By Price</option>
                            <option value='asc'>Ascending</option>
                            <option value='desc'>Descending</option>
                        </select>
                    </div>
                    <div className="join rounded-md py-8 flex items-center justify-center ">
                        <input
                            type="text"
                            onChange={e => {
                                setSearch(e.target.value)
                                refetch()
                            }}
                            placeholder="search"
                            className="input input-bordered w-36 md:w-52 lg:w-96 dark:bg-gray-950 join-item" />
                        <button className="btn bg-orange-400 border-none text-white join-item">Search</button>
                    </div>
                    <div>
                        <select
                         name='filter' 
                         defaultValue='default' 
                         onChange={e => {
                            setFilter(e.target.value)
                            refetch()
                        }}
                         className="select select-bordered w-full max-w-2xl dark:bg-gray-950 join-item">
                            <option disabled value='default'>Filter By Category</option>
                            <option value='Pizza'>Pizza</option>
                            <option value='Soup'>Soup</option>
                            <option value='Steak'>Steak</option>
                            <option value='Dessert'>Dessert</option>
                            <option value='Sandwich'>Sandwich</option>
                            <option value='Curry'>Curry</option>
                            <option value='Burger'>Burger</option>
                        </select>
                    </div>
                </div>
                {isPending && <Loading></Loading>}
                {foods.length ?
                    <div className='pt-3 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            foods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                        }
                    </div>
                    :
                    <h2 className='text-center text-4xl font-semibold py-5 text-red-600'>No Data Found</h2>
                }
            </div>
        </div>
    );
};

export default AllFoods;