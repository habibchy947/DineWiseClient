import contactImg from '../../assets/contactUs.avif'
import locationIcon from '../../assets/location.json'
import phoneIcon from '../../assets/phone.json'
import mailIcon from '../../assets/mail.json'
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_k4fms09', 'template_3d3yrou', form.current, {
                publicKey: '_3N_IId1uTjh9gK1F',
            })
            .then(
                () => {
                    // console.log();
                },
                (error) => {
                    // console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div>
            <div className='py-10 bg-no-repeat bg-cover hero-overlay bg-opacity-30' style={{
                    backgroundImage: `url(${contactImg})`,
                }}>
                    <div className='w-11/12 md:w-8/12 mx-auto space-y-6'>
                    <h2 className='text-center text-5xl font-semibold  text-white'>Contact Us</h2>
                    <p className='text-center text-gray-300'>We’d love to hear from you! Whether you have a question, need assistance, or simply want to share your feedback, our team is here to help. Please feel free to reach out to us through the contact form below, or use any of the methods listed to get in touch.</p>
                    </div>
                    <div className='grid grid-cols-1 w-11/12 md:w-9/12 mx-auto items-center md:grid-cols-2 mt-10 gap-12 md:gap-0 '>
                        <div>
                            <div className='flex flex-col space-y-4 justify-start md:justify-start items-start md:items-start'>
                                <div className='flex items-start'>
                                    <Lottie className='h-16 w-16' animationData={locationIcon} loop={true}></Lottie>
                                    <div>
                                    <h2 className='text-xl font-semibold text-orange-400'>Address</h2>
                                    <span className='text-white'>444, Halisohor, Katalqong Abashik</span>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <Lottie className='h-12 w-16' animationData={phoneIcon} loop={true}></Lottie>
                                    <div>
                                    <h2 className='text-xl font-semibold text-orange-400'>Phone</h2>
                                    <span className='text-white'>01613516358, 01810278085</span>
                                    </div>
                                </div>
                                <div className='flex items-start'>
                                    <Lottie className='h-12 w-16' animationData={mailIcon} loop={true}></Lottie>
                                    <div>
                                    <h2 className='text-xl font-semibold text-orange-400'>Address</h2>
                                    <span className='text-white'>habib2005@gmail.com</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div>
                        <div className="dark:bg-gray-800 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="">
                                <input
                                    type="text"
                                    name='from_name'
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 dark:bg-gray-900 bg-gray-200  border-gray-700 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                name='from_email'
                                className="w-full mt-6 px-4 py-3 dark:bg-gray-900 bg-gray-200 border-gray-700 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <textarea
                                placeholder="Your Message"
                                name='message'
                                className="w-full mt-6 px-4 py-3 textarea-lg dark:bg-gray-900 bg-gray-200 border-gray-700 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="mt-6 w-full bg-orange-400 hover:bg-orange-700 text-white py-3 rounded-md transition duration-200"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>
                        </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Contact;