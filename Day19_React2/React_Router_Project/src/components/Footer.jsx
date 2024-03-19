import React from 'react'

export default function Footer() {
    return (
        <footer className="mt-auto px-4 py-5 bg-gradient-to-r from-cyan-800/60 to-purple-800/60 font-quicksand font-medium text-black">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-2 gap-4 mb-3 md:grid-cols-5">
      <a href="/" title="Go to Router Home Page" className="col-span-2 mb-0 md:col-span-1 inline-flex items-center ml-9 ">
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
        </a>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">Product</p>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Features</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Documentation</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">FAQs</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Pricing</a>
      </nav>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">About</p>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Press-Kit</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Company</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Privacy</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Blog</a>
      </nav>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">Contact</p>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Twitter</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Instagram</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Email</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Advertising</a>
      </nav>
      <nav className="mb-2">
        <p className="mb-3 text-xs font-bold tracking-wider uppercase">Legal</p>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Terms of Service</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Privacy Policy</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Cookie Policy</a>
        <a href="#" className="flex mb-3 text-sm font-medium transition md:mb-2 hover:text-primary">Manage Cookies</a>
      </nav>
    </div>
    
  </div>
</footer>

    );
}