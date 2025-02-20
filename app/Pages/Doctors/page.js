"use client";
import { doctors } from "@/app/Data/data";
import React, { useState } from "react";
import { FaUserMd, FaSearch } from "react-icons/fa";

const Doctors = () => {
    const [query, setQuery] = useState("");
    const [selectedSpecialization, setSelectedSpecialization] = useState("");

    const filteredDoctors = doctors.filter(
        (doctor) =>
            doctor.name.toLowerCase().includes(query.toLowerCase()) &&
            doctor.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase())
    );

    const specializations = [...new Set(doctors.map((doctor) => doctor.specialization))];

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Find Your Doctor</h1>

            {/* Search Bar */}
            <div className="relative w-full max-w-md mb-6">
                <input
                    type="text"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none shadow-md"
                    placeholder="Search doctors..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-500" />
            </div>

            {/* Specialization Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {specializations.map((spec) => (
                    <button
                        key={spec}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all shadow ${selectedSpecialization === spec
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-blue-300 hover:text-white"
                            }`}
                        onClick={() => setSelectedSpecialization(spec)}
                    >
                        {spec}
                    </button>
                ))}
            </div>

            {/* Doctors List */}
            <div className="w-full max-w-2xl">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                        >
                            <FaUserMd className="text-blue-500 text-3xl mr-4" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">{doctor.name}</h2>
                                <p className="text-gray-500">{doctor.specialization}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No doctors found.</p>
                )}
            </div>
        </div>
    );
};

export default Doctors;
