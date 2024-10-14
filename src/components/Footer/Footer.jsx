import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import banner from "../../assets/banner.png";
import food8 from "../../assets/food8.png";
import food7 from "../../assets/food7.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <img src={food8} alt="Ketiston logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-amber-500">KETISTON</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FiSend size={20} /> {/* Using send icon for the mail */}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="mb-2">(456) 789-1230</p>
            <p className="mb-2">info@modrino.co.uk</p>
            <p>South 13th Street<br />New York, America</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Recent News</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img src={food7} alt="Pastry" className="w-25 h-9 rounded" />
                <p className="text-sm">Lorem ipsum Puff pastry bliss...</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={banner} alt="Pastry" className="w-25 h-9 rounded" />
                <p className="text-sm">Lorem ipsum Puff pastry bliss...</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-center">
          © 2024 Bake House. All rights reserved
        </div>
      </div>
    </footer>
  );
}
