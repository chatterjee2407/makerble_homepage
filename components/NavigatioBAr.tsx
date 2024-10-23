'use client'
import { List } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import ActivityFeed from '@/components/ActivityFeed';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);  // Reference to the dropdown menu

    // Toggle the dropdown menu visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        // Add event listener for outside clicks
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up event listener on unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar flex justify-between items-center bg-white text-white h-14">
            
            <div className="flex items-center h-full">
                <button className="text-black text-sm px-5 border-r border-gray-300 h-full">My Apps</button>
                <button className="text-black text-sm px-5 border-r border-gray-300 h-full">Home</button>
                <div className="px-5 border-r text-sm border-gray-300 text-black h-full flex items-center">Explore</div>
                <input className="placeholder:italic placeholder:text-slate-400 ml-2 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                
            </div>
            <div className="flex items-center h-full relative" ref={dropdownRef}>
                <button className="bg-red-500 hover:bg-blue-700 border-r border-gray-300 text-white font-bold py-2 px-4 mr-2 border rounded">+ Create</button>
                {/* Dropdown button */}
                <button onClick={toggleDropdown} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 border mr-2 border-blue-500 hover:border-transparent rounded-xl flex items-center">
                    <List className="mr-2" size={20} /> Menu
                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg py-2 z-50">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                )}
            </div>
        </nav>
        
    );
};

export default Navbar;
