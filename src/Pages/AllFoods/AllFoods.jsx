import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard/FoodCard';

const AllFoods = () => {
    const [foods, setFood] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/allFoods?search=${search}`)
            .then(res => setFood(res.data))
    }, [search])
    return (
        <div>
            <div className='bg-allFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>All Food</h3>
            </div>
            {/* search */}
            <div className='md:w-10/12 w-9/12 mx-auto'>
            <div className="join rounded-md py-8 flex items-center justify-center ">
                <input
                    type="text"
                    onChange={e=>{
                        setSearch(e.target.value)
                    }}
                    placeholder="search"
                    className="input input-bordered w-96 dark:bg-gray-950 join-item" />
                <button className="btn bg-orange-400 border-none text-white join-item">Search</button>
            </div>
            <div className='pt-3 pb-5 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default AllFoods;