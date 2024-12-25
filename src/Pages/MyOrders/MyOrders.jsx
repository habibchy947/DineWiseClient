import React, { useEffect, useState } from 'react';
import useAuth from '../../Context/AuthContext/useAuth';
import axios from 'axios';
import { MdEdit } from 'react-icons/md';
import moment from 'moment';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyOrders = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [foods, setFood] = useState([])
    useEffect(() => {
        axiosSecure.get(`/orders?email=${user?.email}`)
        .then(res => setFood(res.data))
    }, [user.email])


    const handleDeleteOrder = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/orders/${id}`)
            console.log(data)
            toast.success('Order deleted successfully')
            const remaining = foods.filter(fod => fod._id !== id)
            setFood(remaining)
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }
    const deleteConfirmation = (id) => {
        toast(t => (
            <div className='flex gap-3 items-center'>
                <div>
                    <p>Are you <b>sure?</b></p>
                </div>
                <div className='flex gap-2'>
                    <button
                        className='bg-red-400 text-white px-3 py-1 rounded-md'
                        onClick={() => {
                            toast.dismiss(t.id)
                            handleDeleteOrder(id)
                        }}
                    >Yes
                    </button>
                    <button className='bg-green-400 text-white px-3 py-1 rounded-md'
                    onClick={()=>toast.dismiss(t.id)}
                    >Cancel</button>
                </div>
            </div>
        ))
    }
    return (
        <div>
            <div className='bg-allFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>My Orders</h3>
            </div>
            <div className="overflow-x-auto w-11/12 md:w-10/12 mx-auto my-10 border-2 rounded-sm">
                <table className="table">
                    {/* head */}
                    <thead className='bg-slate-50 font-bold'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Owner</th>
                            <th>Price</th>
                            <th>Buying Date</th>
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
                                                    alt={food.name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{food.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {food.owner}
                                </td>
                                <td>{food.foodPrice}$</td>
                                <td>{food.buying_date ? moment(food.buying_date).format('MM/DD/YYYY') : 'N/A'}</td>
                                <th>
                                    <button onClick={() => deleteConfirmation(food._id)} className="btn btn-sm text-xl text-orange-500"><MdEdit /></button>
                                </th>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;