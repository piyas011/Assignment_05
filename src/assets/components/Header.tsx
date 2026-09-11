import { useState } from "react";
import Logo from "../logo-text.png";

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
    <header className=" h-20">
      <div className=" flex container mx-auto justify-between items-center h-full">
        {/*--------------------- Logo Images ----------------------------------*/}
        <a href="#">
          <img src={Logo} alt="DevStack" />
        </a>

        {/*--------------------- Nav Items ----------------------------------*/}
        <nav className=" transition-normal">
          <ul className="flex gap-10 text-[#475569] text-[16px]">
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
        <div className="flex justify-center items-center">
          <button
            onClick={() => handelClickRegisterButton("signIn")}
            className={` px-4 py-2 cursor-pointer rounded-3xl ${registerButton === "signIn" ? "bg-[#DE2A8A] text-white " : "hover:bg-transparent"}`}
            type="button"
          >
            Sign In
          </button>
          <button
            onClick={() => handelClickRegisterButton("signUp")}
            className={`px-4 py-2 cursor-pointer rounded-3xl  ${registerButton === "signUp" ? " bg-[#DE2A8A] text-white" : "hover:bg-transparent "} `}
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
