import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Server,
  Palette,
  Cloud,
  Shield,
  Database,
  Globe,
  Settings,
} from "lucide-react";

function Services() {
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  // Services data
  const services = [
    {
      icon: <Code size={32} className="text-blue-500" />,
      title: "Web Development",
      desc: "Building responsive, high-performance websites using modern frameworks like React, Node.js, and Tailwind.",
    },
    {
      icon: <Smartphone size={32} className="text-purple-500" />,
      title: "Mobile Apps",
      desc: "Creating sleek and scalable mobile apps that deliver seamless user experiences on iOS and Android.",
    },
    {
      icon: <Server size={32} className="text-pink-500" />,
      title: "Backend & APIs",
      desc: "Designing reliable and secure backend systems with RESTful APIs, database management, and cloud integration.",
    },
    {
      icon: <Palette size={32} className="text-yellow-500" />,
      title: "UI/UX Design",
      desc: "Crafting modern, user-friendly designs with a focus on usability, accessibility, and aesthetics.",
    },
    {
      icon: <Cloud size={32} className="text-green-500" />,
      title: "Cloud Solutions",
      desc: "Deploying and managing scalable apps with cloud services like AWS, Azure, and Firebase.",
    },
    {
      icon: <Shield size={32} className="text-red-500" />,
      title: "Security & Optimization",
      desc: "Implementing best practices in security, performance optimization, and code quality assurance.",
    },
    {
      icon: <Database size={32} className="text-indigo-500" />,
      title: "Database Management",
      desc: "Designing and optimizing relational and NoSQL databases for scalability and performance.",
    },
    {
      icon: <Globe size={32} className="text-teal-500" />,
      title: "SEO & Web Performance",
      desc: "Enhancing visibility, speed, and accessibility to improve user experience and search engine rankings.",
    },
    {
      icon: <Settings size={32} className="text-orange-500" />,
      title: "DevOps & Automation",
      desc: "Streamlining development workflows with CI/CD, Docker, and automated deployment pipelines.",
    },
  ];

  // Particles + reveal animation
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
      id="services"
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
              Services
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            What I offer to elevate your business
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1000 ${
            isVisible.cards
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {service.desc}
              </p>
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

export default Services;
