import React from 'react';
import useAuth from '../../Context/AuthContext/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddFood = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const handleAddFood = async (e) => {
        e.preventDefault()
        const form = e.target
        const foodName = form.foodName.value
        const foodPhoto = form.foodPhoto.value
        const category = form.category.value
        const origin = form.origin.value
        const stringQuantity = form.quantity.value
        const stringPrice = form.price.value
        const description = form.description.value
        const price = parseInt(stringPrice)
        const quantity = parseInt(stringQuantity)
        const addBy = {
            name: user?.displayName,
            email: user?.email
        }
        const food = { foodName, foodPhoto, category, origin, quantity, price, description, addBy, purchase_count : 0 }
        console.log(food)

        try{
          const {data} = await axios.post('http://localhost:5000/add-food', food)
            console.log(data)
            form.reset()
            if(data.insertedId){
                toast.success('Food added successfully')
                navigate('/my-foods')
            }
        }catch(err){
            console.log(err)
            toast.error(err)
        }
    }
    return (
        <>
            <div className='bg-addFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>Add Food</h3>
            </div>
            <div className='w-9/12 md:w-8/12 mx-auto rounded-md my-14 p-4 md:p-7 shadow-xl'>
                {/* row-1 */}
                <form onSubmit={handleAddFood} action="" className='space-y-2'>
                    <div className='md:flex gap-6'>
                        {/* food name */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Food Name</span>
                            </div>
                            <input type="text" required name='foodName' placeholder="write food name" className="input  rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                        {/* food url */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Food Image URL</span>
                            </div>
                            <input type="url" required name='foodPhoto' placeholder="write food img url" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-2 */}
                    <div className='md:flex gap-6 items-end'>
                        {/* category */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text dark:text-white">Food Category</span>
                            </label>
                            <select required defaultValue="Pick a Food category" name='category' className="select rounded-md dark:bg-gray-950 select-bordered w-full">
                                <option disabled >Pick a Food category</option>
                                <option>Pizza</option>
                                <option>Soup</option>
                                <option>Steak</option>
                                <option>Dessert</option>
                                <option>Sandwich</option>
                                <option>Curry</option>
                                <option>Burger</option>
                            </select>
                        </div>
                        {/* food origin */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text dark:text-white">Food origin</span>
                            </label>
                            <select required defaultValue="Pick a Food Origin" name='origin' className="select rounded-md dark:bg-gray-950 select-bordered w-full">
                                <option disabled >Pick a Food Origin</option>
                                <option>United States</option>
                                <option>Italy</option>
                                <option>India</option>
                                <option>Japan</option>
                                <option>Thailand</option>
                            </select>
                        </div>
                    </div>
                    {/* row-3 */}
                    <div className='md:flex items-center gap-6'>
                        {/* quantity */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Quantity</span>
                            </div>
                            <input type="number" required name='quantity' placeholder="write food quantity" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Price</span>
                            </div>
                            <input type="number" required name='price' placeholder="write food price" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        {/* food description */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Description</span>
                            </div>
                            <textarea
                                required
                                type="text"
                                placeholder="write a short description"
                                name='description'
                                className="textarea rounded-md textarea-bordered dark:bg-gray-950 textarea-xs w-full"></textarea>
                        </label>
                    </div>
                    <button className='btn border-none bg-orange-400 text-white font-semibold w-full'>Add Item</button>
                </form>
            </div>
        </>
    );
};

export default AddFood;