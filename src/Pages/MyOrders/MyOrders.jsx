import React from 'react';
import useAuth from '../../Context/AuthContext/useAuth';
import axios from 'axios';
import moment from 'moment';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading';

const MyOrders = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    
    const { data: foods = [], isLoading} = useQuery({
        queryKey: ['order', user.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/orders?email=${user?.email}`)
            return data
        }
    })

    const handleDeleteOrder = async (id) => {
        try {
            const { data } = await axios.delete(`https://dine-wise-server-pi.vercel.app/orders/${id}`)
            // console.log(data)
            toast.success('Order deleted successfully')
            const remaining = foods.filter(fod => fod._id !== id)
            setFood(remaining)
        } catch (err) {
            // console.log(err)
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
            <div className='bg-myOrderBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>My Orders</h3>
                <p className='text-center mt-3 font-semibold text-base-200'>DineWise | <span className='font-medium text-gray-300'>My Orders</span></p>

            </div>
            {isLoading && <Loading></Loading>}
            {
                foods.length ? 
                <div className="overflow-x-auto w-11/12 mx-auto bg-base-100 dark:bg-gray-800 my-10 border-2 rounded-sm">
                <table className="table">
                    {/* head */}
                    <thead className='bg-slate-100 text-base'>
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
                                    <button onClick={() => deleteConfirmation(food._id)} className="btn btn-ghost btn-sm text-xl text-red-500"><RiDeleteBin6Line /></button>
                                </th>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            : 
            <div className='w-11/12 mx-auto text-left'>
            <h2 className='text-xl font-bold'>Orders</h2>
            <p>You have no  orders</p>
            </div>
            }
           
        </div>
    );
};

export default MyOrders;