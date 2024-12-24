import React, { useEffect, useState } from 'react';
import useAuth from '../../Context/AuthContext/useAuth';
import axios from 'axios';
import { MdEdit } from 'react-icons/md';
import moment from 'moment';

const MyOrders = () => {
    const {user} = useAuth()
    const [foods, setFood] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${user?.email}`)
            .then(res => setFood(res.data))
    }, [user.email])
    console.log(foods)
    return (
        <div>
            <div className='bg-allFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>Food Purchase</h3>
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
                                <td>{moment().subtract(10, 'days').calendar(food.buying_date)}</td>
                                <th>
                                    <button className="btn btn-sm text-xl text-orange-500"><MdEdit /></button>
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