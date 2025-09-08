import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50 transition">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          Cooper
        </div>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Services</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
