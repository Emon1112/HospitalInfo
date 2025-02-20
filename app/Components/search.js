"use client"
import React, { useState } from 'react';
import { doctors, patients } from '../Data/data';

const Search = () => {
    const [query, setQuery] = useState('');

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(query.toLowerCase())
    );

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-4">
            <input
                type="text"
                className="border rounded p-2 w-full mb-4"
                placeholder="Search patients or doctors"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <h2 className="text-xl mb-2">Patients</h2>
            <ul>
                {filteredPatients.map(patient => (
                    <li key={patient.id} className="border-b py-2">{patient.name} - {patient.ailment}</li>
                ))}
            </ul>
            <h2 className="text-xl mt-4 mb-2">Doctors</h2>
            <ul>
                {filteredDoctors.map(doctor => (
                    <li key={doctor.id} className="border-b py-2">{doctor.name} - {doctor.specialization}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
