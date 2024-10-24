// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import "../index.css";

// const Footer = () => {
//   return (
//     <footer className="bg-[#523f1b] text-white py-6 mt-auto">
//       <div className="container mx-auto flex flex-col items-center justify-center text-center">
//         <div className="text-3xl font-semibold mb-2">
//           Explore More Amazing Books!
//         </div>
//         <div className="text-lg text-gray-400 mb-4">
//           Because reading is the ultimate adventure.
















//         </div>
//         <div className="flex items-center space-x-2">
//           <a href="https://github.com/suryanshsingh2001/MyLibrary/"
//             target="_blank"
//             rel="noopener noreferrer" className="relative inline-block text-lg group">
//             <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//             <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//             <span className="absolute left-0 w-56 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//             <span className=" relative">
//               <FontAwesomeIcon icon={faGithub} className="mr-2" />
//               View Source Code
//             </span>
//             </span>
//             <span

//               className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//               data-rounded="rounded-lg"
//               ></span>
//           </a>
//           {/* Add more social media or contact links as needed */}
//         </div>
//         <div className="mt-4">&copy; {new Date().getFullYear()} MyLibrary</div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import React from 'react';
import Logo from './Logo'; // Adjust the path as necessary
import { Facebook, Twitter, Linkedin, Mail, Send, BookOpen, Phone, Mail as MailIcon, MapPin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#4A3B24] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
            <Link
          to="/"
         className="text-white text-3xl font-semibold tracking-tight flex items-center"
      
         ></Link>


</div>
<p className="text-sm mb-4">
              Discover a world of knowledge through our extensive collection of books and resources.
            </p>
            <div className="flex space-x-4">
            <button className="p-2 bg-[#5A4B34] rounded-full hover:bg-[#6A5B44]">
                <Phone className="h-5 w-5" />
              </button>
              <button className="p-2 bg-[#5A4B34] rounded-full hover:bg-[#6A5B44]">
                <MailIcon className="h-5 w-5" />
              </button>
              <button className="p-2 bg-[#5A4B34] rounded-full hover:bg-[#6A5B44]">
                <MapPin className="h-5 w-5" />
              </button>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Reader Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">My Account</a></li>
              <li><a href="#" className="hover:text-white">Reading Lists</a></li>
              <li><a href="#" className="hover:text-white">Book Reservations</a></li>
              <li><a href="#" className="hover:text-white">Library Card</a></li>
              <li><a href="#" className="hover:text-white">Reading History</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">E-Books</a></li>
              <li><a href="#" className="hover:text-white">Audiobooks</a></li>
              <li><a href="#" className="hover:text-white">Digital Magazines</a></li>
              <li><a href="#" className="hover:text-white">Research Tools</a></li>
              <li><a href="#" className="hover:text-white">Academic Journals</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Library Hours</a></li>
              <li><a href="#" className="hover:text-white">Membership</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold pr-10 mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive updates about new books and events.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#5A4B34] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A5B44] flex-1"
              />
              <button className="bg-[#6A5B44] p-2 rounded-md hover:bg-[#7A6B54]">
                <Send className="h-5 w-5" />
              </button>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-[#5A4B34] rounded-full hover:bg-[#6A5B44]">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-[#5A4B34] rounded-full hover:bg-[#6A5B44]">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-[#5A4B34] rounded-full hover:bg-[#6A5B44]">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-[#5A4B34] rounded-full hover:bg-[#6A5B44]">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#5A4B34]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} MyLibrary. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white mx-3">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white mx-3">Terms of Service</a>
              <a href="#" className="text-sm hover:text-white mx-3">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;