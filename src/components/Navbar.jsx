import React,{useState} from "react";
import {Link} from 'react-scroll'
import { FaBars, FaTimes , FaLinkedin , FaGithub } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Icon } from "@iconify/react";

const Navbar = () => {

  const [nav, setnav] = useState(false)

  const handleClick = () =>{
    setnav(!nav)
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08100c] text-[#f1f1f1]">
      <div>
        <p className="font-bold text-4xl font-serif">Welcome</p>
      </div>
      {/*....Menu.....*/}
      <div>
        <ul className="hidden md:flex">
          <li className="text-xl font-bold">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="text-xl font-bold">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="text-xl font-bold">
            <Link to="skill" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="text-xl font-bold">
            <Link to="project" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="text-xl font-bold">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/*....Hamburger.....*/}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*....Mobile Menu.....*/}
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#08100c] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skill" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*....Social Icons.....*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/jash-sharma-7220a6221/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#e5933b]">
            <a
              href="https://leetcode.com/Jash_Sharma_1310/"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              LeetCode{" "}
              <Icon
                icon="simple-icons:leetcode"
                className="text-black "
                width="30"
                height="30"
              />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#333333]">
            <a
              href="https://github.com/Jash-Sharma"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-green-600">
            <a
              href="mailto:jashsharma1310@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-100 bg-[#5f5f69]">
            <a
              href="https://drive.google.com/file/d/1xB2OlJqmKirRsNn6YNKRs6omT1K0FoyY/view?usp=sharing"
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
