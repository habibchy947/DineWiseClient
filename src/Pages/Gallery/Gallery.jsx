import axios from 'axios';
import React, { useState } from 'react';
import { FiEye } from 'react-icons/fi';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import Loading from '../../Shared/Loading';
import { useQuery } from '@tanstack/react-query';
const Gallery = () => {
    const { data: gallery = [], isLoading} = useQuery({
        queryKey: ['gallery'],
        queryFn: async () => {
            const { data } = await axios.get('/gallery.json')
            return data
        }
    })
    const [open, setOpen] = useState(false);
    const [focusIndex, setFocusIndex] = useState(0)
    const handleCurrentImage = (idx) => {
        setFocusIndex(idx)
        setOpen(true)
    }
    return (
        <div>
            <div className='bg-galleryBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>Food Gallery</h3>
                <p className='text-center mt-3 font-semibold text-base-200'>DineWise | <span className='font-medium text-gray-300'>Gallery</span></p>
            </div>
            {
                isLoading && <Loading/>
            }
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-5 w-11/12 mx-auto py-10'>
                {
                    gallery.map((image, idx) => (
                        <div
                            key={idx}
                            className='relative cursor-pointer h-64'
                            onClick={() => handleCurrentImage(idx)}
                        >
                            <img className='object-cover h-full w-full rounded-md' src={image.src} alt="" />
                            <div className='absolute inset-5 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100  transition-opacity duration-300'>
                                <p className='text-4xl text-white'><FiEye></FiEye></p>
                            </div>
                        </div>
                    ))}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={gallery.map((img)=> ({src: img.src}))}
                index={focusIndex}
            />
        </div>
    );
};

export default Gallery;