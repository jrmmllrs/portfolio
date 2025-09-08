import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 ">
      {/* Top gradient border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>

      {/* Background effect (soft gradient glow) */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent opacity-70 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo / About */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Cooper
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md">
            I’m Jerome, a passionate software engineer crafting modern digital
            experiences. Let’s build something great together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Stay Connected</h3>
          <p className="text-gray-400 text-sm mb-4">
            Reach out via socials or email me directly.
          </p>
          <div className="flex gap-3 mb-4">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-300 hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-300 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jerome@example.com"
              className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 text-gray-300 hover:text-white transition"
            >
              <Mail size={20} />
            </a>
          </div>
          {/* Email CTA */}
          <a
            href="mailto:jerome@example.com"
            className="inline-block px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative text-center text-xs text-gray-500 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Jerome Millares. Built with ❤️ and React.
      </div>
    </footer>
  );
}

export default Footer;
