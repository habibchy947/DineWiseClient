import React, { useEffect, useRef, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import useAuth from '../../Context/AuthContext/useAuth';
import axios from 'axios';
import { ImCancelCircle } from 'react-icons/im';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyFoods = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [foods, setFood] = useState([])
    const [singleFood, setSingleFood] = useState({})
    const modalRef = useRef(null)
    useEffect(() => {
        axiosSecure.get(`/allFoods/${user?.email}`)
            .then(res => setFood(res.data))
    }, [user.email])

    const handleModal = (id) => {
        setSingleFood({})
        document.getElementById('my_modal_5').showModal()
        axios.get(`http://localhost:5000/food-details/${id}`)
            .then(res => setSingleFood(res.data))
    }

    const handleUpdateFood = (e) => {
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
        if(user?.email !== singleFood.addBy.email){
            return toast.error('invalid user')
        }
        const food = { foodName, foodPhoto, category, origin, quantity, price, description, addBy, purchase_count: singleFood.purchase_count }
        // console.log(food)
        
        axios.put(`http://localhost:5000/update-food/${singleFood._id}`, food)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount) {
                    setFood((prevFoods)=> prevFoods.map(fody => fody._id === singleFood._id ? {...fody, ...food} : fody) )
                    modalRef.current.close()
                    toast.success('Food Updated successfully')
                }
            })
    }
    return (
        <div>
            <div className='bg-myFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>My Foods</h3>
            </div>
            <div className="overflow-x-auto w-11/12 md:w-10/12 mx-auto my-10 border-2 rounded-sm">
                <table className="table">
                    {/* head */}
                    <thead className='bg-slate-50 font-bold'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Origin</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            foods.map((food, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    referrerPolicy='no-referrer'
                                                    src={food.foodPhoto}
                                                    alt={food.foodName} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{food.foodName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {food.origin}
                                </td>
                                <td>{food.quantity}</td>
                                <td>{food.price}$</td>
                                <th>
                                    <button onClick={() => handleModal(food._id)} className="btn btn-sm text-xl text-orange-500"><MdEdit /></button>
                                </th>

                            </tr>)
                        }
                    </tbody>
                </table>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog ref={modalRef} id="my_modal_5" className="modal modal-center modal-middle">
                    <div className="modal-box dark:bg-gray-900">
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-circle btn-ghost text-red-500 text-2xl"><ImCancelCircle /></button>
                            </form>
                        </div>
                        <form onSubmit={handleUpdateFood} action="" className='space-y-2'>
                            <div className='gap-6'>
                                {/* food name */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text dark:text-white">Food Name</span>
                                    </div>
                                    <input defaultValue={singleFood.foodName} type="text" required name='foodName' placeholder="write food name" className="input  rounded-md dark:bg-gray-950 input-bordered w-full" />
                                </label>
                                {/* food url */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text dark:text-white">Food Image URL</span>
                                    </div>
                                    <input defaultValue={singleFood.foodPhoto} type="url" required name='foodPhoto' placeholder="write food img url" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                                </label>
                            </div>
                            {/* row-2 */}
                            <div className='md:flex gap-6 items-end'>
                                {/* category */}
                                {singleFood.category && (<div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Food Category</span>
                                    </label>
                                    <select required defaultValue={singleFood.category} name='category' className="select rounded-md dark:bg-gray-950 select-bordered w-full">
                                        <option disabled>Pick a job category</option>
                                        <option>Pizza</option>
                                        <option>Soup</option>
                                        <option>Steak</option>
                                        <option>Dessert</option>
                                        <option>Sandwich</option>
                                        <option>Curry</option>
                                        <option>Burger</option>
                                    </select>
                                </div>)}
                                {/* food origin */}
                                {singleFood.origin && (<div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text dark:text-white">Food origin</span>
                                    </label>
                                    <select required defaultValue={singleFood.origin} name='origin' className="select rounded-md dark:bg-gray-950 select-bordered w-full">
                                        <option disabled >Pick a Food Origin</option>
                                        <option>United States</option>
                                        <option>Italy</option>
                                        <option>India</option>
                                        <option>Japan</option>
                                        <option>Thailand</option>
                                    </select>
                                </div>)}
                            </div>
                            {/* row-3 */}
                            <div className='md:flex items-center gap-6'>
                                {/* quantity */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text dark:text-white">Quantity</span>
                                    </div>
                                    <input defaultValue={singleFood.quantity} type="number" required name='quantity' placeholder="write food quantity" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                                </label>
                                {/* price */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text dark:text-white">Price</span>
                                    </div>
                                    <input defaultValue={singleFood.price} type="number" required name='price' placeholder="write food price" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
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
                                        defaultValue={singleFood.description}
                                        type="text"
                                        placeholder="write a short description"
                                        name='description'
                                        className="textarea rounded-md textarea-bordered dark:bg-gray-950 textarea-xs w-full"></textarea>
                                </label>
                            </div>
                            <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className='btn border-none bg-orange-400 text-white font-semibold w-full'>Add Item</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyFoods;