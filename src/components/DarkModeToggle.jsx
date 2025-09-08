import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform duration-300"
    >
      {darkMode ? (
        <Sun
          size={20}
          className="text-yellow-400 transition-transform duration-300 transform rotate-0"
        />
      ) : (
        <Moon
          size={20}
          className="text-gray-700 transition-transform duration-300 transform rotate-0"
        />
      )}
    </button>
  );
}

export default DarkModeToggle;
