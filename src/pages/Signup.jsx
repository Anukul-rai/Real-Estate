import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { assets } from '../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
import { toast } from 'react-toastify';



function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
    }
    setError('');
    // Submit the data (email, password, phone) to backend 
    console.log({ name, email, password, phone });

    //Clear all input fields
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');

    toast.success('Account created successfully!');

    //Redirect to home
    navigate('/');
    };

    return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-900 via-purple-750 to-teal-500 '>
    <motion.form 
    initial={{opacity: 0, y:50}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once:true}}
    className="flex flex-col p-5 w-full max-w-sm space-y-6 bg-white rounded-2xl shadow-lg border" onSubmit={handleSubmit}>
        <div className="w-full flex justify-center mb-3">
            <Link to="/"><img src={assets.logo_dark} alt="to Home" className='ml-25 cursor-pointer ' /></Link>
        </div>
        <div className="text-center mb-4">
            <h2 className='text-2xl font-semibold text-gray-800 mb-1'>Create an Account</h2>
            <p className='text-gray-600 text-sm'>Get started with your free account</p>
        </div>
        <input
            className='border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            type="text"
            placeholder=" Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            className='border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            className='border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <input
            className='border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Phone Input Section */}
        <div className="w-full">
        <PhoneInput
            country={'np'}
            value={phone}
            onChange={setPhone}
            containerClass="!w-full"
            inputClass="!w-full !border !rounded !h-[41px] !text-base !pl-[52px]"
            buttonClass="!border !rounded !bg-white !w-[48px]"
            dropdownClass="!z-50"
        />
        </div>


        {error && <p className='text-red-500 text-sm'>{error}</p>}

        <button
            type="submit"
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200'
        >Sign Up
        </button>
         {/* Optional: Already have account */}
        <p className="text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 hover:underline">
            Log in
            </a>
        </p>
        </motion.form>
    </div>
  );
}

export default Signup;
