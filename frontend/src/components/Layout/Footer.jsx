import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] p-8 text-white">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 mb-8">
        <img
          className="w-48 h-20 object-cover rounded"
          alt="Megaminds Logo"
          src="/images/logo-nav.png"
        />
        <div className="flex flex-col gap-3">
          <b className="text-xl">Address</b>
          <div className="text-[1rem]">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-sm md:text-[1rem]" />
              <span>
                5-5-35/201/nr.2nd Floor, Prashanti Nagar, IE Kukatpally,
                Hyderabad - 500072
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-10 ">
              <div className="flex items-center gap-3 mt-2">
                <IoMdCall className="text-sm md:text-[1rem]" />
                <span>+91 8919903233</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <FaEnvelope className="text-sm md:text-[1rem]" />
                <span>contact@megamindsit.in</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="text-xl font-semibold">Follow us on</span>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-11 h-11 rounded border border-[#6f3522] flex items-center justify-center [background:linear-gradient(180deg,_rgba(213,_103,_66,_0),_#d56742)]"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded border border-[#6f3522] flex items-center justify-center [background:linear-gradient(180deg,_rgba(213,_103,_66,_0),_#d56742)]"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded border border-[#6f3522] flex items-center justify-center [background:linear-gradient(180deg,_rgba(213,_103,_66,_0),_#d56742)]"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded border border-[#6f3522] flex items-center justify-center [background:linear-gradient(180deg,_rgba(213,_103,_66,_0),_#d56742)]"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-11 h-11 rounded border border-[#6f3522] flex items-center justify-center [background:linear-gradient(180deg,_rgba(213,_103,_66,_0),_#d56742)]"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
        <div className="flex flex-col gap-3">
          <b className="text-xl">About Our Company</b>
          <p className="w-full md:w-96 text-lg leading-relaxed text-[#e0e0df]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-8 mb-8">
          <div className="flex flex-col gap-4">
            <b className="text-xl">Quick Links</b>
            <div className="flex flex-col gap-4 text-lg">
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Home
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> About Us
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Services
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Contact Us
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Careers
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <b className="text-xl">Services</b>
            <div className="flex flex-col flex-wrap gap-4 text-lg">
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Research
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Master Dissertation
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Web Development
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Application
                Development
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Master Student
                Assignment
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col flex-wrap gap-4 text-lg">
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> B/Tech/ MTech Projects
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Online Classes
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Guest Lecture
              </a>
              <a
                href="#"
                className="flex items-center gap-3 hover:text-gray-300 text-sm md:text-[1rem]"
              >
                <BiSolidRightArrow className="text-xs" /> Offline Classes
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-4 border-[#dd8568] pt-4">
        <div className="flex flex-col font-karla md:flex-row items-center justify-between text-base text-white">
          <div className="flex items-center gap-2">
            <span>© 2024 All Rights Reserved.</span>
          </div>
          <span className="text-center">
            Designed and Developed with passion by Megaminds
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
