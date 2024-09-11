// components/Footer.js

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/insurance-suite">
                      <p className="text-base text-gray-300 hover:text-white">
                        Insurance Suite
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/finance-suite">
                      <p className="text-base text-gray-300 hover:text-white">
                        Finance Suite
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-suite">
                      <p className="text-base text-gray-300 hover:text-white">
                        Legal Suite
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/telecom-suite">
                      <p className="text-base text-gray-300 hover:text-white">
                        Telecom Suite
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/press-suite">
                      <p className="text-base text-gray-300 hover:text-white">
                        Press Suite
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Education Suite
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Manufacturing Suite
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Retail Suite
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Pricing
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Documentation
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Guides
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Contact
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        About
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Blog
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Mission
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Partners
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Products
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/document-engine">
                      <p className="text-base text-gray-300 hover:text-white">
                        Auflo Document Engine
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vision-engine">
                      <p className="text-base text-gray-300 hover:text-white">
                        Auflo Vision Engine
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/audio-engine">
                      <p className="text-base text-gray-300 hover:text-white">
                        Auflo Audio Engine
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <p className="text-base text-gray-300 hover:text-white">
                        Auflo Query Engine
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-base text-gray-300">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-white border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-black hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </p>

            <p href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.051 1.91.22 2.546.476.74.276 1.368.684 1.892 1.207.524.524.93 1.151 1.207 1.892.257.636.425 1.482.476 2.546.047 1.024.06 1.378.06 3.808s-.013 2.784-.06 3.808c-.051 1.064-.22 1.91-.476 2.546-.276.74-.684 1.368-1.207 1.892-.524.524-1.151.93-1.892 1.207-.636.257-1.482.425-2.546.476-1.024.047-1.378.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.051-1.91-.22-2.546-.476-.74-.276-1.368-.684-1.892-1.207-.524-.524-.93-1.151-1.207-1.892-.257-.636-.425-1.482-.476-2.546C2.328 15.099 2.315 14.745 2.315 12.315s.013-2.784.06-3.808c.051-1.064.22-1.91.476-2.546.276-.74.684-1.368 1.207-1.892.524-.524 1.151-.93 1.892-1.207.636-.257 1.482-.425 2.546-.476 1.024-.047 1.378-.06 3.808-.06zM12 0C8.745 0 8.34.018 7.08.057 5.81.095 4.63.335 3.65.872 2.666 1.404 1.833 2.38 1.3 3.35c-.519 1.214-.663 2.46-.69 3.66-.053 1.163-.059 1.537-.059 4.293s.006 3.13.059 4.293c.027 1.2.171 2.446.69 3.66.533.97 1.366 1.946 2.35 2.398 1.493.681 3.048.809 4.56.809s3.069-.128 4.56-.809c.984-.452 1.817-1.428 2.35-2.398.519-1.214.663-2.46.69-3.66.053-1.163.059-1.537.059-4.293s-.006-3.13-.059-4.293c-.027-1.2-.171-2.446-.69-3.66-.533-.97-1.366-1.946-2.35-2.398C15.869.335 14.689.095 13.42.057 12.16.018 11.755 0 12 0zm0 5.837a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.464a4.303 4.303 0 1 1 0-8.606 4.303 4.303 0 0 1 0 8.606zm3.67-9.56a1.562 1.562 0 1 1-3.124 0 1.562 1.562 0 0 1 3.124 0z"
                  clipRule="evenodd"
                />
              </svg>
            </p>

            <p href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.55 22.418c8.513 0 13.171-7.063 13.171-13.172 0-.2 0-.399-.014-.598A9.373 9.373 0 0 0 22 6.285a9.04 9.04 0 0 1-2.608.714 4.49 4.49 0 0 0 1.971-2.475 8.947 8.947 0 0 1-2.85 1.092A4.462 4.462 0 0 0 16.52 5.64a4.464 4.464 0 0 0-4.462 4.464c0 .349.04.687.114 1.012a12.67 12.67 0 0 1-9.184-4.643A4.461 4.461 0 0 0 4.767 9.84a4.426 4.426 0 0 1-2.018-.557v.057a4.467 4.467 0 0 0 3.58 4.374 4.438 4.438 0 0 1-2.005.075 4.468 4.468 0 0 0 4.176 3.106A8.929 8.929 0 0 1 2 18.437a12.573 12.573 0 0 0 6.77 1.98" />
              </svg>
            </p>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0">
            © 2024 Auflo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
