import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import BurgerIcon from "../icons/burger";
import { useTranslation } from "react-i18next";
import { PORTFOLIO } from "../../utils/constants";
import flagFR from "../../assets/images/fr.svg";
import flagEN from "../../assets/images/uk.svg";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownVisible(false);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <nav className="bg-white border-gray-200 sm:p-7 z-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={PORTFOLIO} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20 md:h-36" alt="Logo" />
        </a>
        <button
          onClick={toggleNavVisibility}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={!isNavVisible}
        >
          <span className="sr-only">Open main menu</span>
          <BurgerIcon />
        </button>
        <div className={`w-full md:block md:w-auto ${isNavVisible ? "hidden" : ""}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#a-propos-de-moi"
                className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
                aria-current="page"
              >
                {t("navbar.aboutMe")}
              </a>
            </li>
            <li>
              <a
                href="#mes-projets"
                className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
              >
                {t("navbar.projects")}
              </a>
            </li>
            <li>
              <a
                href="#parcours"
                className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
              >
                {t("navbar.journey")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
              >
                {t("navbar.contact")}
              </a>
            </li>
            <li className="relative">
              <button
                onClick={toggleDropdownVisibility}
                className="flex items-center py-2 px-3 text-sky-950 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#5FACD3] md:p-0"
              >
                <img src={i18n.language === "fr" ? flagFR : flagEN} alt="Language flag" className="h-5 w-5 mr-2" />
                {i18n.language === "fr" ? "Français" : "English"}
              </button>
              {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-32 md:w-40 bg-white border border-gray-200 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => changeLanguage("fr")}
                    className="flex cursor-pointer items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                  >
                    <img src={flagFR} alt="French flag" className="h-5 w-5 mr-2" />
                    Français
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className="flex cursor-pointer items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
                  >
                    <img src={flagEN} alt="English flag" className="h-5 w-5 mr-2" />
                    English
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
      {isDropdownVisible && <div className="fixed inset-0 z-10" onClick={() => setIsDropdownVisible(false)}></div>}
    </nav>
  );
}
