import React, { useState, useEffect, useRef } from "react";

function Projects() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  // Project data
  const projectList = [
    {
      title: "Task Tracker App",
      description:
        "A full-stack web app built with React and Node.js that helps users track their tasks efficiently.",
      link: "#",
      gradient: "from-blue-500 to-purple-600",
      hover: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek portfolio website built with React and Tailwind CSS showcasing my skills and projects.",
      link: "#",
      gradient: "from-pink-500 to-yellow-500",
      hover: "hover:text-pink-600 dark:hover:text-pink-400",
    },
    {
      title: "E-Commerce Prototype",
      description:
        "An e-commerce platform prototype with shopping cart and payment integration.",
      link: "#",
      gradient: "from-green-500 to-teal-500",
      hover: "hover:text-green-600 dark:hover:text-green-400",
    },
  ];

  // Particles
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.2,
      });
    }
    setParticles(particleArray);

    // Reveal animations
    setTimeout(() => setIsVisible((p) => ({ ...p, title: true })), 200);
    setTimeout(() => setIsVisible((p) => ({ ...p, cards: true })), 600);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speedX + 100) % 100,
          y: (particle.y + particle.speedY + 100) % 100,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Mouse movement
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
      id="projects"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 overflow-hidden py-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
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
              boxShadow: `0 0 ${particle.size * 3}px rgba(99, 102, 241, 0.5)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible.title
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 relative">
            <span
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-shift 4s ease-in-out infinite",
              }}
            >
              Projects
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Some of my favorite works
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ${
            isVisible.cards
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {projectList.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div
                className={`h-48 rounded-2xl mb-6 bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
              >
                {project.title}
              </div>
              <h3
                className={`text-2xl font-bold text-slate-900 dark:text-white mb-3 transition ${project.hover}`}
              >
                {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                className={`inline-flex items-center font-semibold text-indigo-600 dark:text-indigo-400 hover:underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project <span className="ml-1">&rarr;</span>
              </a>
            </div>
          ))}
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

export default Projects;
