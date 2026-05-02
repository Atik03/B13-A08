import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">TilesBrand</h2>
            <div className="">
              <ul className="text-gray-400 space-y-2">
                <li>
                  Premium quality tiles designed for modern homes and elegant
                  spaces.
                </li>
                <li>
                  Stylish ceramic, porcelain, and marble finishes for every
                  interior.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@tilesbrand.com</li>
              <li>Phone: +880 1234-567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:scale-110 transition-transform duration-300"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} TilesBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
