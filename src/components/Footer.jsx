import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 justify-between">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare
            size={30}
            className="rounded hover:fill-[#1674EA] cursor-pointer transition"
          />
          <FaInstagram
            size={30}
            className="rounded hover:fill-[#DE2662] cursor-pointer transition"
          />
          <FaTwitterSquare
            size={30}
            className="rounded hover:fill-[#1C99E6] cursor-pointer transition"
          />
          <FaGithubSquare
            size={30}
            className="rounded hover:fill-[#6CB7DC] cursor-pointer transition"
          />
          <FaDribbbleSquare
            size={30}
            className="rounded hover:fill-[#E04583] cursor-pointer transition"
          />
        </div>
      </div>
      <div className="flex justify-between mt-6 lg:col-spam-3">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
