import { useState } from "react";
import Logo from "../logo-text.png";
import { FaBarsStaggered } from "react-icons/fa6";

type registerButtonType = "signIn" | "signUp";
type navButtonType = "home" | "technologies" | "project" | "about" | "contact";

const Header = () => {
  //   Register Button Click functionality
  const [registerButton, setRegisterButton] =
    useState<registerButtonType>("signIn");
  const handelClickRegisterButton = (buttonType: registerButtonType) => {
    setRegisterButton(buttonType);
  };

  //   Nav Button Click functionality
  const [navButton, setNavButton] = useState("home");
  const handelNavClickButton = (navType: navButtonType) => {
    setNavButton(navType);
  };
  return (
    <header className=" h-20 z-100 px-2 fixed bg-white left-0 right-0 top-0 ">
      <div className=" flex container mx-auto justify-between items-center h-full ">
        {/*--------------------- Logo Images ----------------------------------*/}
        <a href="#">
          <img src={Logo} alt="DevStack" className="w-30 sm:w-auto" />
        </a>

        {/*--------------------- Nav Items ----------------------------------*/}
        <nav className=" transition-normal">
          <ul className=" hidden md:flex gap-2 md:gap-5  lg:gap-10 text-[#475569] text-[16px]">
            <li className={` ${navButton === "home" ? "active" : ""}`}>
              <a href="#" onClick={() => handelNavClickButton("home")}>
                Home
              </a>
            </li>
            <li className={`${navButton === "technologies" ? "active" : ""}`}>
              <a href="#" onClick={() => handelNavClickButton("technologies")}>
                Technologies
              </a>
            </li>
            <li className={`${navButton === "project" ? "active" : ""}`}>
              <a href="#" onClick={() => handelNavClickButton("project")}>
                Projects
              </a>
            </li>
            <li className={`${navButton === "about" ? "active" : ""}`}>
              <a href="#" onClick={() => handelNavClickButton("about")}>
                About
              </a>
            </li>
            <li className={`${navButton === "contact" ? "active" : ""}`}>
              <a href="#" onClick={() => handelNavClickButton("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/*--------------------- Buttons ----------------------------------*/}
        <div className="hidden sm:flex justify-center items-center">
          <button
            onClick={() => handelClickRegisterButton("signIn")}
            className={` text-[14px] md:text-[16px]   px-2 md: lg:px-4 py-1 md:py-2 cursor-pointer rounded-3xl  ${registerButton === "signIn" ? " bg-[#DE2A8A] text-white" : "hover:bg-transparent "} `}
            type="button"
          >
            Sign In
          </button>
          <button
            onClick={() => handelClickRegisterButton("signUp")}
            className={` text-[14px] md:text-[16px]   px-2 md: lg:px-4 py-1 md:py-2 cursor-pointer rounded-3xl  ${registerButton === "signUp" ? " bg-[#DE2A8A] text-white" : "hover:bg-transparent "} `}
            type="button"
          >
            Sign Up
          </button>
        </div>

        <div className="flex sm:hidden mr-5 text-3xl ">
          <button className="outline-none cursor-pointer">
            {" "}
            <FaBarsStaggered />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
