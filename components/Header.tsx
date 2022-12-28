import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import {useState} from "react"

function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();
  const[open,setOpen]=useState(false);
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-1">
        <img className="rounded-full p-2 h-20 w-20" src="favicon.png" alt="" />

        <div>
          <h1 className="text-lg text-white font-bold">Lucky Draw</h1>
          <p className="text-xs text-[#b3b3b3] truncate">
            User: {address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>
      <div className="hidden md:flex md:col-span-3 items-center justify-center rounded-md">
        <div className="bg-[#111111] p-4 space-x-2">
          <NavButton isActive title="Buy Tickets" />
          <NavButton onClick={disconnect} title="Logout" />
        </div>
      </div>
      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="md:hidden lg:hidden block h-8 w-8 mx-auto text-white cursor-pointer" onClick={()=>setOpen(!open)} />
        <ul className={`${open?"block":"hidden"}`}>
          <li>
          
        <NavButton onClick={handleScroll} title="Buy Now" />
        
          </li>
        <li>
          <NavButton onClick={disconnect} title="Logout" />
        </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
