import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-[200px]'>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="orange"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loading;