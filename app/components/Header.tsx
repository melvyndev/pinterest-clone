import React from "react";
import Image from "next/image";
import { HiBell, HiChat, HiSearch } from "react-icons/hi";

function Header() {
    return (
        <div className="flex gap-3 items-center p-2">
            <Image src='/logo.png' alt="logo" width={50} height={50} className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"/> 
            <button className="bg-black text-white p-2 rounded-full">Home</button>
            <button className="p-2 rounded-full">Create</button>
            <div className="bg-[#f2f3f7] p-2 flex items-center rounded-full ml-auto">
                <HiSearch className="text-[25px]"/>
                <input type="text" placeholder="Search" className="outline-none bg-transparent ml-2"/>
                <HiBell className="text-[25px] text-gray-500 ml-2"/>
                <HiChat className="text-[25px] text-gray-500 ml-2" />
                <Image src="/man.jpg" alt="profile" width={50} height={50} className="hover:bg-gray-300 p-2 rounded-full cursor-pointer ml-2"/>
            </div>
        </div>
    );
}

export default Header;
