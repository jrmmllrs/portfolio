import React, { useState, useEffect, useRef } from "react";
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

function Contact() {
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  // Particles
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.3 + 0.2,
      });
    }
    setParticles(particleArray);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      return () => section.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-20 min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99,102,241,0.15) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(139,92,246,0.1) 0%, transparent 50%)
            `,
          }}
        />
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-indigo-400 dark:bg-indigo-300 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
              boxShadow: `0 0 ${particle.size * 3}px rgba(99,102,241,0.5)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl font-black text-center mb-12">
          <span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-shift 4s ease-in-out infinite",
            }}
          >
            Get In Touch
          </span>
          <span className="block w-20 h-1 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-6 text-center md:text-left text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg">
              Whether you have a question, a project idea, or just want to say
              hello, feel free to drop me a message. I’ll do my best to get back
              to you as soon as possible!
            </p>

            <div className="space-y-4">
              <p>
                📍 <span className="font-medium">Based in:</span> Philippines
              </p>
              <p>
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
          <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-3xl shadow-xl p-8">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
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
                  className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
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
                  className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300"
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

        {/* Logo Loop */}
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
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
