import Link from 'next/link';
import React from 'react';
import { FaHome } from "react-icons/fa";


const Back = () => {
    return (
        <div>
            <Link href="/" className="bg-green-500 left-0"><FaHome /></Link>
        </div>
    );
};

export default Back;