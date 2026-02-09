"use client";
import { useState } from "react";
import { Codepen, LogIn, MoveRight, Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="lg:container  lg:mt-1 bg-white ">
      <nav className="flex items-center justify-between  py-4 z-50">
        <div className="flex items-center gap-2 px-4">
          <Codepen />
          <h1 className="font-semibold text-logo-text">Logo goes here</h1>
        </div>
        <ul className="flex items-center gap-7 cursor-pointer text-nav-text max-lg:hidden">
          <li>Home</li>
          <li>
            <select className="outline-none bg-transparent cursor-pointer">
              <option>Features</option>
            </select>
          </li>
          <li>Pricing</li>
          <li>Solutions</li>
          <li>
            <select className="outline-none bg-transparent cursor-pointer">
              <option>Resources</option>
            </select>
          </li>
          <li>Contact</li>
        </ul>
        <div className="lg:hidden px-4 z-50">
          {show ? (
            <X onClick={() => setShow(false)} />
          ) : (
            <Menu onClick={() => setShow(true)} />
          )}
        </div>
        <div className="flex items-center gap-2 max-lg:hidden">
          <Button className="hover:cursor-pointer">
            <LogIn size={16} />
            Login
          </Button>

          <Button
            variant="outline"
            className="cursor-pointer hover:text-white gap-2"
          >
            Register
            <MoveRight size={14} />
          </Button>
        </div>
        <ul
          className={`fixed top-14  w-full
          flex flex-col gap-4 
          transition-all duration-150 transform ease-in-out
          cursor-pointer text-nav-text bg-white
          lg:hidden px-5 py-3
          ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
        >
          <li>Home</li>
          <li>
            <select className="outline-none  cursor-pointer ">
              <option>Features</option>
            </select>
          </li>
          <li>Pricing</li>
          <li>Solutions</li>
          <li>
            <select className="outline-none  cursor-pointer">
              <option>Resources</option>
            </select>
          </li>
          <li>Contact</li>
          <div className="space-x-4">
            <Button
              variant="outline"
              className="bg-primary_brand cursor-pointer  border-none gap-2  hover:text-white  "
            >
              <LogIn size={16} />
              Login
            </Button>

            <Button
              variant="outline"
              className="cursor-pointer bg-transparent text-btn-text-secondary gap-2 "
            >
              Register
              <MoveRight size={14} />
            </Button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
