import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(null);

  const handleSubmit = () => {
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-500", label: "Facebook" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400", label: "Twitter" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-600", label: "LinkedIn" },
    { icon: FaGithub, href: "#", color: "hover:text-purple-400", label: "GitHub" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 container mx-auto px-8 md:px-16 lg:px-24 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Tashindu Dasanayake
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate developer crafting digital experiences with modern technologies. 
              Let's build something amazing together.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="mr-3 text-blue-400" />
                <span>tashindudasanayaka@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaMapMarkerAlt className="mr-3 text-purple-400" />
                <span>525/1,Pavmhena,Papiliyawala,Sri Lanka.</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaPhone className="mr-3 text-green-400" />
                <span>076 6305946</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home","About", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get updates on my latest projects and insights.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all duration-200"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-2 px-4 rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social media and bottom section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center text-gray-400">
              <span>&copy; {new Date().getFullYear()} Tashindu Dasanayake. All rights reseved.</span>
            </div>

            {/* Social media */}
            <div className="flex space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-200 p-2 rounded-full hover:bg-gray-800`}
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;