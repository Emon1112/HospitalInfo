import Link from 'next/link';
import React from 'react';

const Home = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-5xl font-bold mb-10 text-gray-800">Hospital Info.</h1>
            <div className="flex space-x-8">
                <Link href="/Pages/Doctors">
                    <div className="w-64 h-64 bg-blue-500 text-white flex flex-col justify-center items-center rounded-2xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                        <h2 className="text-3xl font-semibold">Doctors</h2>
                    </div>
                </Link>
                <Link href="/Pages/Patients">
                    <div className="w-64 h-64 bg-green-500 text-white flex flex-col justify-center items-center rounded-2xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                        <h2 className="text-3xl font-semibold">Patients</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
