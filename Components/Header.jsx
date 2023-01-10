
import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";

const Header = () => {
  const links = [
    { name: "home", link: "/" },
    { name: "Services", link: "/" },
    { name: "about", link: "/" },
    { name: "blog", link: "/" },
    { name: "contact", link: "/" },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7  ">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-sans text-gray-500">
          <span className=" text-3xl text-indigo-600mr-1 pt-2">
            <Image src="/dravyafolio.png" alt="nextjs" width={100} height={100} className="md:w-[24] md:h-[24] h-50 w-50"/>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1]left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[149px]"
          } `}
        >
          {links?.map((link, i) => (
            <li
              key={link?.name}
              className="uppercase font-bold md:ml-8 text-xlmd:my-0 my-7 list-none"
            >
              <a
                href={link.link}
                key={i}
                className="text-gray-400 hover:text-gray-900 duration-500 "
              >
                {link?.name}
              </a>
            </li>
          ))}
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
