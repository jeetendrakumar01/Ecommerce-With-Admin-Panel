"use client"
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-4 border-b border-gray-200 text-gray-900 bg-white shadow-sm">
      {/* Logo */}
      <Image
        className="cursor-pointer w-24 md:w-28"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        <Link href="/" className="hover:text-gray-600 transition">Home</Link>
        <Link href="/all-products" className="hover:text-gray-600 transition">Shop</Link>
        <Link href="/about" className="hover:text-gray-600 transition">About Us</Link>
        <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
        {isSeller && (
          <button onClick={() => router.push("/seller")} className="text-sm border px-4 py-1.5 rounded-full">Seller Dashboard</button>
        )}
      </div>
      
      {/* Desktop User Options */}
      <div className="hidden md:flex items-center gap-4">
        <Image className="w-5 h-5" src={assets.search_icon} alt="search icon" />
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push("/cart")} />
              <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-600 transition">
            <Image src={assets.user_icon} alt="user icon" className="w-5 h-5" />
            Account
          </button>
        )}
      </div>
      
      {/* Mobile Navigation */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button onClick={() => router.push("/seller")} className="text-xs border px-4 py-1.5 rounded-full">Seller</button>
        )}
        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={() => router.push("/")} />
              <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={() => router.push("/all-products")} />
              <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={() => router.push("/cart")} />
              <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={() => router.push("/my-orders")} />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-600 transition">
            <Image src={assets.user_icon} alt="user icon" className="w-5 h-5" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;