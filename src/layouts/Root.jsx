import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Product from '../components/Product/Product'
import Explore from '../components/Explore/Explore'
import Offyour from '../components/Offyour/Offyour'
import About from '../components/About/About'
import Featured from '../components/Featured/Featured'
import Footer from '../components/Footer/Footer'
import { FaArrowUp } from 'react-icons/fa';

export default function Root() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Header />
      <Product />
      <Offyour />
      <Explore />
      <About />
      <Featured />
      <Footer />
      <Outlet />
      
      {isVisible && (
       <button
       onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
       className="fixed bottom-6 right-6 bg-[#F4A460] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-[#d18e47] transition duration-300 ease-in-out"
       aria-label="Back to top"
     >
       <FaArrowUp className="w-4 h-4" />
     </button>
      )}
    </>
  )
}
