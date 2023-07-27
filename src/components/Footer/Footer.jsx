import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-[#1A1919] ">
      <div className="collage-container">
        <div className="flex flex-col lg:flex-row justify-between  gap-12  ">
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">CollageHub</h2>
            <p className="text-justify w-96 text-[#fffff5b2]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            <ul className="flex gap-6 mt-6 items-center chef-footer ">
              <li className="bg-indigo-500 p-4 rounded-full">
                <FaFacebookF />
              </li>
              <li className="bg-indigo-500 p-4 rounded-full">
                <FaInstagram />
              </li>
              <li className="bg-indigo-500 p-4 rounded-full">
                <FaTwitter />
              </li>
            </ul>
          </div>
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">Company</h2>
            <ul className="space-y-3 chef-footer ">
              <li>About Us</li>
              <li>Work</li>
              <li>Latest News </li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">Our facilities</h2>
            <ul className="space-y-3 chef-footer ">
              <li>It support</li>
              <li>Plans & Pricing </li>
              <li>Sport</li>
              <li>Research equipment</li>
            </ul>
          </div>
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">Support</h2>
            <ul className="space-y-3 chef-footer ">
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="text-gray-50 ">
            <h2 className="text-2xl mb-4 font-bold">Contact</h2>
            <ul className="space-y-3 chef-footer ">
              <li>524 Broadway , NYC</li>
              <li>+1 777 - 978 - 5570</li>
            </ul>
          </div>
        </div>
        <hr className="mt-10  border  " />
        <div className="mt-11">
          <p className="text-center text-gray-50">&copy; 2023 CollageHub. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
