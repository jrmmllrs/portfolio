function Navbar() {
  return (
<nav className="bg-white shadow-md fixed top-0 w-full z-50">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <div className="text-2xl font-bold text-blue-600 tracking-tight">Cooper</div>
    <ul className="flex space-x-6 text-gray-700 font-medium">
      <li>
        <a href="#home" className="hover:text-blue-600 transition ">Home</a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-600 transition">About</a>
      </li>
      <li>
        <a href="#services" className="hover:text-blue-600 transition">Services</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
