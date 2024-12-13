"use client"

import React, { useState } from "react";
import Flex from "./Flex";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import Button from "./Button";
import { BiBasket } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <Container>
        <Flex className="items-center justify-between py-4">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={193}
              height={60}
              className="pt-2 pb-2"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>

          {/* Desktop Links */}
          <Flex className="hidden lg:flex gap-6">
            <NavLink route="/" label="Home" />
            <NavLink route="/" label="Courses" />
            <NavLink route="/" label="Blog" />
            <NavLink route="/" label="Shop" />
            <NavLink route="/" label="Pages" />
            <NavLink route="/" label="Events" />
          </Flex>

          {/* Action Icons */}
          <Flex className="hidden lg:flex text-primary items-center text-2xl gap-6">
            <div className="relative">
              <Link href="/">
                <BiBasket />
              </Link>
              <span className="font-medium text-white w-5 h-5 rounded-full bg-secondary absolute top-1 right-1 translate-x-1/2 -translate-y-1/2 z-20 text-[12px] text-center leading-[17px]">
                0
              </span>
            </div>
            <Link href="/">
              <MdOutlineAccountCircle />
            </Link>
            <Link href="/">
              <HiMagnifyingGlass />
            </Link>
          </Flex>

          {/* Login/Sign In Buttons */}
          <Flex className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-700 font-medium text-lg border-b-2 border-gray-700"
            >
              Login
            </Link>
            <Button>Sign In</Button>
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md mt-4 rounded-lg p-4">
            <NavLink route="/" label="Home" />
            <NavLink route="/" label="Courses" />
            <NavLink route="/" label="Blog" />
            <NavLink route="/" label="Shop" />
            <NavLink route="/" label="Pages" />
            <NavLink route="/" label="Events" />
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-700 font-medium text-lg"
              >
                Login
              </Link>
              <Button>Sign In</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
