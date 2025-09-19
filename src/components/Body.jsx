import React, { useState, useEffect, useRef } from 'react';

function UltimatePortfolioBody() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [textReveal, setTextReveal] = useState(false);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  // Initialize floating particles
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 30; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }
    setParticles(particleArray);
    setIsVisible(true);
    setTimeout(() => setTextReveal(true), 500);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        x: (particle.x + particle.speedX + 100) % 100,
        y: (particle.y + particle.speedY + 100) % 100,
      })));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement
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
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient mesh */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              transform: `scale(${particle.size})`,
              boxShadow: `0 0 ${particle.size * 4}px rgba(59, 130, 246, 0.6)`,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-200 dark:border-blue-800 rounded-3xl opacity-30 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-dashed border-indigo-300 dark:border-indigo-600 opacity-40 animate-bounce" />
      </div>

      <section
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto pt-32 pb-20 px-6 flex flex-col lg:flex-row items-center gap-16 min-h-screen"
        id="home"
      >
        {/* Content Section */}
        <div className="lg:flex-1 text-center lg:text-left">
          {/* Main Heading with Staggered Animation */}
          <div className="mb-8 overflow-hidden">
            <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-black leading-tight transition-all duration-1000 ${
              textReveal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}>
              <span className="text-slate-900 dark:text-white block mb-2">
                Hi, I'm
              </span>
              <span 
                className="block relative"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-flow 3s ease-in-out infinite',
                }}
              >
                Jerome
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-xl -z-10 animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Subtitle with Typewriter Effect */}
          <div className={`mb-10 transition-all duration-1000 delay-300 ${
            textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-xl lg:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
              A passionate{" "}
              <span className="relative inline-block font-bold text-blue-600 dark:text-blue-400">
                Software Engineer
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 opacity-20 blur-sm rounded-lg scale-110" />
              </span>{" "}
              specializing in crafting exceptional digital experiences that push the boundaries of what's possible on the web.
            </p>
          </div>

          {/* Skills Tags */}
          <div className={`mb-10 transition-all duration-1000 delay-500 ${
            textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Cloud'].map((skill, index) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm"
                  style={{
                    animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-4 transition-all duration-1000 delay-700 ${
            textReveal ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 skew-x-12" />
            </button>
            
            <button className="group relative px-8 py-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </button>
          </div>
        </div>

        {/* Image Section with 3D Effects */}
        <div className="lg:flex-1 flex justify-center lg:justify-end">
          <div className={`relative group transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            {/* Main Image Container */}
            <div className="relative">
              {/* Placeholder for actual image */}
              <div 
                ref={imageRef}
                className="w-80 h-96 lg:w-96 lg:h-[450px] rounded-3xl bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 shadow-2xl group-hover:shadow-3xl transition-all duration-500 overflow-hidden transform group-hover:scale-105 group-hover:rotate-2"
                style={{
                  boxShadow: `
                    0 25px 50px -12px rgba(0, 0, 0, 0.25),
                    0 0 100px rgba(59, 130, 246, 0.3)
                  `,
                }}
              >
                {/* Profile Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg animate-bounce flex items-center justify-center text-2xl">
                ⚡
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center text-2xl animate-pulse">
                🚀
              </div>

              {/* Background Glow */}
              <div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-30 blur-3xl scale-110 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500 -z-10"
                style={{
                  animation: 'glow-pulse 4s ease-in-out infinite',
                }}
              />

              {/* 3D Frame Effect */}
              <div className="absolute inset-0 rounded-3xl border-4 border-white/20 dark:border-white/10 group-hover:border-white/40 dark:group-hover:border-white/20 transition-all duration-500" />
            </div>

            {/* Status Indicator */}
            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-full shadow-lg">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Available</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1.1); }
          50% { opacity: 0.5; transform: scale(1.25); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default UltimatePortfolioBody;