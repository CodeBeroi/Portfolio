"use client"

import { motion } from 'framer-motion'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

    const form = useRef();
    const emailInputRef = useRef(null);
    const messageInputRef = useRef(null);

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [messageError, setMessageError] = useState(false);
    const [mailError, setMailError] = useState(false);

    const text = "Say hello";

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        const email = emailInputRef.current.value;
        const message = messageInputRef.current.value;

        message ? setMessageError(false) : setMessageError(true);
        email ? setMailError(false) : setMailError(true);

        if (email && message) {
            emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                (result) => {
                    setSuccess(true);
                    form.current.reset();
                    console.log('SUCCESS!');
                },
                (error) => {
                    setError(true);
                    console.log('FAILED...', error.text);
                },
            );
        }
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
                {/* TEXT CONTAINER */}
                <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center jusitfy-center text-6xl'>
                    <div>
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                {letter}  
                            </motion.span>
                        ))}
                        😄
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form
                    ref={form}
                    className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24'
                    onSubmit={sendEmail}
                >
                    <span>Dear Mathilde,</span>
                    <div className='flex flex-col'>
                        <textarea
                            rows={6}
                            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
                            name='user_message'
                            ref={messageInputRef}
                        />
                        {messageError && <span className='text-red-600'>Enter a message</span>}
                    </div>

                    <span>My email address is:</span>
                    <div className='flex flex-col'>
                        <input
                            type='text'
                            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
                            name='user_email'
                            ref={emailInputRef} />
                        {mailError && <span className='text-red-600'>Enter an email</span>}
                    </div>
                    <span>Regards</span>
                    <button className='bg-customred rounded font-semibold text-white p-4'>Send</button>
                    {success && <span className='text-green-600 font-semibold'>Your message has been sent successfully !</span>}
                    {error && <span className='text-red-600 font-semibold'>Something went wrong...</span>}
                </form>
            </div>
        </motion.div>
    )
}

export default ContactPage;