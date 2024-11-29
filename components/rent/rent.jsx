'use client'

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Rent() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdownName) => {
        setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <div className="pt-28 px-4">
            <div className="flex gap-2">
                <div className="relative">
                    <input
                        type="text"
                        id="search"
                        className="w-full px-12 py-2 rounded-full border border-gray-400 "
                        placeholder="Search"
                    />
                    <FiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" size={20} />
                </div>
                {/* Price Dropdown */}
                <div className="relative">

                    <button
                        onClick={() => toggleDropdown("price")}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:shadow"
                    >
                        Price
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeDropdown === "price" && (
                        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-48">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Under $1,000</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">$1,000 - $2,000</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">$2,000 - $3,000</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Property Type Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("propertyType")}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:shadow"
                    >
                        Property type
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeDropdown === "propertyType" && (
                        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-48">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Apartment</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Townhome</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Condo</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Single family</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Beds Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("beds")}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:shadow"
                    >
                        Beds
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeDropdown === "beds" && (
                        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-48">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">1 Bed</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">2 Beds</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">3+ Beds</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Move-in by Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("moveInBy")}
                        className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:shadow"
                    >
                        Move-in by
                        <svg
                            className="w-4 h-4 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {activeDropdown === "moveInBy" && (
                        <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-md w-48">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Next Week</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Next Month</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Flexible</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Save Search Button */}
                <div className="relative">
                    <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:shadow">
                        Save search
                    </button>
                </div>
            </div>
        </div>
    );
}
