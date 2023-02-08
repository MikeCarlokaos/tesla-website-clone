import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full py-3 px-12">
      <div className="w-full grid grid-cols-4 capitalize font-semibold">
        <div>
          <a href="/" className="w-full h-full">
            <svg
              className="w-[120px] h-[24px]"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <div className="col-span-2">
          <ul className="w-full flex text-[15px]">
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/model-s">model s</a>
            </li>
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/model-3">model 3</a>
            </li>
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/model-x">model x</a>
            </li>
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/model-y">model y</a>
            </li>
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/solar-roof">solar roof</a>
            </li>
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/solar-panels">solar panels</a>
            </li>
          </ul>
        </div>
        <div className="justify-self-end">
          <ul className="w-full flex text-[15px]">
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/shop">shop</a>
            </li>
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/account">account</a>
            </li>
            <li className="py-1 px-4 rounded-md transition delay-200 duration-500 ease-in-out hover:bg-var-transparent-primary">
              <a href="/menu">menu</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
