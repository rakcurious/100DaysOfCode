import React from 'react'
import {Link, NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="mt-auto px-4 py-5 bg-gradient-to-r from-cyan-800/60 to-purple-800/60 font-quicksand font-medium text-black">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
      <Link to='/' className="col-span-2 mb-0 md:col-span-1 inline-flex items-center ml-9 ">
      <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="black"
                fill="black"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                Router
              </span>
        </Link>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">Product</p>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Features</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Documentation</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">FAQs</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Pricing</NavLink>
      </nav>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">About</p>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Press-Kit</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Company</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Privacy</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Blog</NavLink>
      </nav>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">Contact</p>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Twitter</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Instagram</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Email</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Advertising</NavLink>
      </nav>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">Legal</p>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Terms of Service</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Privacy Policy</NavLink>
        <NavLink to='/' className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Cookie Policy</NavLink>
        <NavLink to='/'  className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Manage Cookies</NavLink>
      </nav>
    </div>
    
  </div>
</footer>

    );
}