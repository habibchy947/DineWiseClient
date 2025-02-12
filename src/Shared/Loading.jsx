import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { TbFidgetSpinner } from "react-icons/tb";
import { ImSpinner2 } from "react-icons/im";
const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[200px]'>
            {/* <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="orange"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            /> */}
            {/* <TbFidgetSpinner className='animate-spin text-4xl text-orange-500' /> */}
            <ImSpinner2 className='animate-spin text-4xl text-orange-500' />
        </div>
    );
};

export default Loading;