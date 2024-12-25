import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
import { easeInOut, easeOut } from 'motion';
import { Fade } from 'react-awesome-reveal';
const Slide = ({ image, title, description }) => {
    // const titleVariant = {
    //     hidden: { opacity: 0, y: -30 },
    //     visible: { opacity: 1, y: 0 }
    // }
    // const descriptionVariant = {
    //     hidden: {opacity : 0, y:20},
    //     visible: {opacity :1 , y:0}
    // }
    // const buttonVariant = {
    //     hidden: {opacity : 0, scale:0.8},
    //     visible: {opacity :1 , scale:1}
    // }
    return (
        <div className='bg-blend-overlay relative bg-gray-700/70 bg-no-repeat bg-cover md:h-[30rem] lg:h-[28rem] h-[28rem]'
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className='w-11/12 md:w-6/12 lg:w-7/12 mx-auto text-center space-y-7 py-12 md:py-24'>
                <motion.h2
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 1, ease: easeOut }}
                    className='text-4xl md:text-5xl leading-tight text-white font-bold '>{title}</motion.h2>
                <motion.p
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: false }}
                    variants={{
                        hidden: { opacity: 1 },
                        visible: {
                            opacity: 1,
                            transition: {
                                duration: 1.5,
                                delay:1,
                                staggerChildren: 0.05
                            }
                        }
                    }}
                    className='text-gray-200 text-lg font-semibold leading-relaxed tracking-wide whitespace-normal'>
                    {description.split(' ').map((letter, idx) => (
                        <motion.span
                            className='inline-block mr-2'
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 1.6, ease: 'easeOut' }}
                        >
                            {letter}{' '}
                        </motion.span>
                    ))}
                </motion.p>
                <Fade cascade damping={0.1} delay={2}>
                    <Link to='/all-foods'><button className='btn bg-orange-500 border-none mt-5 text-white font-bold px-6'>All Foods</button></Link>
                </Fade>
            </div>
        </div>
    );
};

export default Slide;