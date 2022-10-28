import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://kritik.servicesstrategy.com"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="/kritik.png"
            className="mr-3 h-20 rounded-full"
            alt="Kritik"
          />
          <div className="flex flex-col items-start">
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                Kritik Sah
            </span>
            <span className="text-lg font-medium whitespace-nowrap dark:text-white">
                jr. web3/web Devloper
            </span>

          </div>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="https://kritik.servicesstrategy.com" className="mr-4 hover:underline md:mr-6 ">
              Portfolio
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/c/ITRebels" className="mr-4 hover:underline md:mr-6">
              YouTube
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/kritik.sah/" className="mr-4 hover:underline md:mr-6 ">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kritiksah/" className="hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="https://kritik.servicesstrategy.com" className="hover:underline">
          Services Strategy
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
