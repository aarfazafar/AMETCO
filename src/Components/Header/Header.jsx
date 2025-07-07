import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
      nav.classList.toggle('translate-x-full');
    });
  }, []);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-6 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="text-2xl font-bold">MOHEIM</div>
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-gray-500 transition">Home</a>
        <a href="#" className="hover:text-gray-500 transition">Product</a>
        <a href="#" className="hover:text-gray-500 transition">Shop</a>
        <a href="#" className="hover:text-gray-500 transition">About</a>
        <a href="#" className="hover:text-gray-500 transition">Contact</a>
      </nav>
      <div className="md:hidden burger w-6 h-6 cursor-pointer">
        <span className="block w-full h-0.5 bg-black mb-1"></span>
        <span className="block w-full h-0.5 bg-black mb-1"></span>
        <span className="block w-full h-0.5 bg-black"></span>
      </div>

      <div className="nav-links fixed right-0 top-0 w-64 h-full bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col p-6 gap-4 z-40">
        <a href="#" className="text-lg">Home</a>
        <a href="#" className="text-lg">Product</a>
        <a href="#" className="text-lg">Shop</a>
        <a href="#" className="text-lg">About</a>
        <a href="#" className="text-lg">Contact</a>
      </div>
    </header>
  );
};

export default Header;
