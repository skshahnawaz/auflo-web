"use client";
import { useState } from "react";
import { DialogPanel, Dialog } from "@headlessui/react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [solutionsOpen, setSolutionsOpen] = useState(false);
  // const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-black shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center mr-6">
              <p className="text-2xl font-bold text-white">Auflo</p>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="text-white inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Overview
              </Link>

              {/* <div className="relative flex">
                <button
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="border-transparent text-gray-400 hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Solutions
                  <svg
                    className="text-gray-400 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative flex">
                <button
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="border-transparent text-gray-400 hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                >
                  Products
                  <svg
                    className="text-gray-400 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                
              </div> */}

              <Link
                href="#features"
                className="border-transparent text-gray-400 hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Features
              </Link>

              <Link
                href="#"
                className="border-transparent text-gray-400 hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Company
              </Link>

              <Link
                href="/contact"
                className="border-transparent text-gray-400 hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <DialogPanel
          focus="true"
          className="fixed inset-0 bg-black text-white"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <p className="text-2xl font-bold">Auflo</p>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6">
            <div className="space-y-4">
              <Link href="/" className="block px-4 py-2 text-lg font-medium">
                Overview
              </Link>
              {/* <Link
                href="/solutions"
                className="block px-4 py-2 text-lg font-medium"
              >
                Solutions
              </Link>
              <Link
                href="/products"
                className="block px-4 py-2 text-lg font-medium"
              >
                Products
              </Link> */}
              <Link href="#" className="block px-4 py-2 text-lg font-medium">
                Resources
              </Link>
              <Link href="#" className="block px-4 py-2 text-lg font-medium">
                Company
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-lg font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
};

export default Header;
