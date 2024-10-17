import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Logo and Address */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold">Funiro.</h2>
            <address className="mt-4 not-italic text-gray-500">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </address>
          </div>

          {/* Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-700">Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-700">Help</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold text-gray-700">Newsletter</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center border-t pt-4">
          <p className="text-gray-500">&copy; 2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
