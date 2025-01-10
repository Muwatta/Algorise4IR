import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Header Navigation */}
      <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
        {/* Logo on the Left */}
        <div className="ml-10 flex-shrink-0">
          <a href="/">
            <img
              src="/src/images/ATE-img-logo.jpg"
              alt="ATE Logo"
              className="w-16 h-auto rounded-md"
            />
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div
          className="text-2xl cursor-pointer lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col lg:flex-row absolute lg:static top-16 left-0 w-full bg-gray-900 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden'
          } lg:flex lg:mr-10 lg:ml-10`}
        >
          <li className="mb-2 lg:mb-0 lg:mr-6">
            <a href="/" className="hover:text-[#1BC8D3]">
              Home
            </a>
          </li>
          <li className="mb-2 lg:mb-0 lg:mr-6">
            <a href="/review" className="hover:text-[#1BC8D3]">
              Review
            </a>
          </li>
          <li className="mb-2 lg:mb-0 lg:mr-6">
            <a href="/courses" className="hover:text-[#1BC8D3]">
              Courses
            </a>
          </li>
          <li className="mb-2 lg:mb-0 lg:mr-6">
            <a href="/about" className="hover:text-[#1BC8D3]">
              About
            </a>
          </li>
        </ul>
      </header>

      {/* Hero Section */}
      <section className="hero flex flex-col lg:flex-row justify-between items-center mt-10">
        {/* Image Section */}
        <div className="lg:w-[540px] border-[1rem] rounded-[15px] ml-20 mr-20">
          <img
            src="src/images/4IR.jpg"
            alt="convener-img"
            className="w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="mr-10 ml-10 md:mt-0 sm:mt-[1rem] text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-2">
            Insights <span className="text-[#1BC8D3]">Session</span>
          </h1>
          <p className="w-96 mb-3 justify-center font-light text-justify">
            Welcome to Algorise Tech Explorers page! Our goal is to expose and
            provide students with the resources and opportunities they need to
            enhance their skills, grow in their education, and unlock future
            possibilities in the technology space.
          </p>
          <p className="w-96 mb-3 justify-center font-bold text-justify">
            Explore || Innovate || Build
          </p>

          {/* Buttons */}
          <div className="btns-container">
            <button className="bg-[#1BC8D3] text-white pt-2 pb-2 pl-5 pr-5 mr-5 mb-5">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
