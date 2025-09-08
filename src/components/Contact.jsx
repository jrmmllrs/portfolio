import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center relative">
        Get In Touch
        <span className="block w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether you have a question, a project idea, or just want to say
            hello, feel free to drop me a message. I’ll do my best to get back
            to you as soon as possible!
          </p>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              📍 <span className="font-medium">Based in:</span> Philippines
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              📧 <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:jerome@example.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                jerome@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200/20 dark:border-gray-700/40">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 text-gray-900 dark:text-white"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
        className="mt-20"
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={70}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}

export default Contact;
