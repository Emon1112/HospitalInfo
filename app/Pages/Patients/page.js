"use client";
import { patients } from "@/app/Data/data";
import React, { useState } from "react";
import { FaUserInjured, FaSearch } from "react-icons/fa";

const Patients = () => {
    const [query, setQuery] = useState("");

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Patient Directory</h1>

            {/* Search Bar */}
            <div className="relative w-full max-w-md mb-6">
                <input
                    type="text"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 outline-none shadow-md"
                    placeholder="Search patients..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-3 text-gray-500" />
            </div>

            {/* Patients List */}
            <div className="w-full max-w-2xl">
                {filteredPatients.length > 0 ? (
                    filteredPatients.map((patient) => (
                        <div
                            key={patient.id}
                            className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                        >
                            <FaUserInjured className="text-green-500 text-3xl mr-4" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-700">{patient.name}</h2>
                                <p className="text-gray-500">{patient.ailment}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center">No patients found.</p>
                )}
            </div>
        </div>
    );
};

export default Patients;
