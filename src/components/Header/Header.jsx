import { useState, useEffect } from "react";
import { FaCoffee, FaBars, FaTimes } from 'react-icons/fa';
import banner from "../../assets/banner.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActive(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();

    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActive(id.substring(1));
      setIsOpen(false); // Close the mobile menu on click

      window.history.pushState(null, null, id);
    }
  };

  return (
    <header className="h-screen text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          transform: 'rotate(180deg)',
          height: '100%',
          width: '100%',
        }}
      />

      <nav className="relative z-10 flex justify-between items-center p-4 lg:p-6 lg:px-12">
        <div className="flex items-center space-x-2">
          <FaCoffee className="w-8 h-8 text-amber-400" />
          <span className="text-xl font-semibold">Delicious Cafe</span>
        </div>

        <ul className="hidden md:flex items-center justify-center flex-grow space-x-6 lg:space-x-8 text-md font-medium">
          {["home", "product", "explore", "featured"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={(e) => handleClick(e, `#${item}`)}
                className={`block p-2 hover:text-amber-400 transition-colors duration-300 ${
                  active === item ? "text-amber-400 font-semibold" : ""
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-amber-400 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>

        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-center space-y-4 text-sm font-medium py-4 md:hidden">
            {["home", "product", "explore", "featured"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => handleClick(e, `#${item}`)} // Close menu after click
                  className="block p-2 text-white hover:text-amber-400 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-24 -mt-4 md:-mt-12">
        <h2 className="text-amber-400 text-lg md:text-xl mb-2 font-medium">Delicious Cafe</h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" style={{ fontFamily: "'Sansita Swashed', cursive" }}>
          Sweet Treats,<br />Perfect Eats
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-md">Indulge in our artisanal breads and pastries, crafted with passion and the finest ingredients.</p>
        <div className="space-x-4">
          <a href="/shop" className="bg-[#933C24] hover:bg-[#7A321E] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 inline-flex items-center">
            Shop Now
          </a>
          <a href="/about" className="bg-transparent hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-6 border-2 border-white hover:border-transparent rounded-full transition-colors duration-300">
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </header>
  );
}
