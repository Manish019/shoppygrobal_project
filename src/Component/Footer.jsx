import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer () {
  return (
    <div className="bg-[#b9152b] text-gray-300 py-10 md:px-28 px-2 ">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4  gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-white">Shoppy Globe</h2>
          <p className="text-sm text-white">
            Your one-stop shop for fashion, electronics, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/product" className="hover:text-white">Shop</Link></li>
            <li><Link to="/shoppyEcommerce" className="hover:text-white">About</Link></li>
            <li><Link to="/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Status</a></li>
            <li><a href="#" className="hover:text-white">Payment Options</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="https://www.facebook.com/"><FaFacebookF className="hover:text-white" /></a>
            <a href="https://x.com/?lang=en"><FaTwitter className="hover:text-white" /></a>
            <a href="https://www.instagram.com/"><FaInstagram className="hover:text-white" /></a>
            <a href="https://www.youtube.com/"><FaYoutube className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-5 text-center text-sm text-white border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
