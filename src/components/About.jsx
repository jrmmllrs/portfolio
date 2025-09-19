import React, { useState, useEffect, useRef } from 'react';

function UltimateAboutMe() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [activeSkill, setActiveSkill] = useState(null);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  // Skills data with proficiency levels
  const skills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-400', icon: '⚛️' },
    { name: 'Node.js', level: 90, color: 'from-green-500 to-emerald-400', icon: '🟢' },
    { name: 'TypeScript', level: 88, color: 'from-blue-600 to-indigo-500', icon: '📘' },
    { name: 'Python', level: 85, color: 'from-yellow-500 to-orange-400', icon: '🐍' },
    { name: 'MongoDB', level: 82, color: 'from-green-600 to-teal-500', icon: '🍃' },
    { name: 'Docker', level: 80, color: 'from-blue-400 to-sky-500', icon: '🐳' },
    { name: 'AWS', level: 78, color: 'from-orange-500 to-red-400', icon: '☁️' },
    { name: 'GraphQL', level: 75, color: 'from-pink-500 to-purple-500', icon: '🔗' },
  ];

  // Initialize particles and visibility
  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 25; i++) {
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

    // Staggered visibility animation
    setTimeout(() => setIsVisible(prev => ({ ...prev, title: true })), 200);
    setTimeout(() => setIsVisible(prev => ({ ...prev, content: true })), 600);
    setTimeout(() => setIsVisible(prev => ({ ...prev, skills: true })), 1000);
    setTimeout(() => setIsVisible(prev => ({ ...prev, cards: true })), 1400);
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
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Mouse-reactive gradient */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Floating particles */}
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

        {/* Geometric decorations */}
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-indigo-200 dark:border-indigo-800 rounded-full opacity-20 animate-spin-slow" />
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-3xl opacity-30 animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible.title ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-6xl lg:text-7xl font-black text-slate-900 dark:text-white mb-4 relative">
            <span 
              className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 4s ease-in-out infinite',
              }}
            >
              About Me
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Crafting digital experiences with passion & precision</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: About Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible.content ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                      👨‍💻
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Jerome</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold">Software Engineer</p>
                    </div>
                  </div>

                  <div className="space-y-6 text-slate-700 dark:text-slate-300">
                    <p className="text-lg leading-relaxed">
                      I'm a dedicated software engineer with an insatiable passion for creating 
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400"> beautiful, scalable, and user-centric</span> digital experiences that make a real impact.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      My expertise spans the full-stack spectrum, with deep knowledge in 
                      <span className="font-semibold"> React, Node.js, Python, and cloud technologies</span>. 
                      I thrive on solving complex problems and transforming ideas into elegant solutions.
                    </p>

                    <p className="text-lg leading-relaxed">
                      When I'm not immersed in code, you'll find me exploring emerging technologies, 
                      contributing to open-source projects, or hiking mountain trails. I believe in 
                      <span className="font-semibold text-purple-600 dark:text-purple-400"> continuous growth</span> and love challenges that push my boundaries.
                    </p>
                  </div>

                  <button className="mt-8 group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105">
                    <span className="relative z-10">Let's Connect</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/20 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 skew-x-12" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Skills */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible.skills ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Skills & Expertise
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                    style={{
                      animation: `fadeInUp ${0.6 + index * 0.1}s ease-out forwards`,
                      animationDelay: `${1 + index * 0.1}s`,
                      opacity: 0,
                    }}
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105 group-hover:-rotate-1`}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-bold text-white">{skill.name}</span>
                      </div>
                      
                      {/* Animated progress bar */}
                      <div className="w-full bg-white/30 rounded-full h-2 mb-2">
                        <div 
                          className="h-2 bg-white rounded-full transition-all duration-1000"
                          style={{
                            width: activeSkill === skill.name ? `${skill.level}%` : '0%',
                          }}
                        />
                      </div>
                      
                      <div className="flex justify-between text-white/90 text-sm">
                        <span>Proficiency</span>
                        <span className="font-semibold">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education Cards */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-700 ${
          isVisible.cards ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Experience Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center text-xl">
                  💼
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  <div className="absolute left-1 top-5 w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Senior Software Engineer</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Tech Innovations Inc. (2022 - Present)</p>
                  <p className="text-slate-700 dark:text-slate-300">Leading full-stack development of enterprise applications, mentoring junior developers, and architecting scalable solutions.</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Freelance Developer</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">Independent (2020 - 2022)</p>
                  <p className="text-slate-700 dark:text-slate-300">Delivered 50+ projects for clients worldwide, specializing in React applications and API development.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <div className="relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border border-white/20 dark:border-slate-700/50 rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" />
                  <div className="absolute left-1 top-5 w-px h-12 bg-gradient-to-b from-purple-500 to-transparent" />
                  <h4 className="font-bold text-slate-900 dark:text-white">BS Computer Science</h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">Tech University (2016 - 2020)</p>
                  <p className="text-slate-700 dark:text-slate-300">Magna Cum Laude • Focus on Software Engineering and AI/ML • Dean's List for 6 semesters</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-full" />
                  <h4 className="font-bold text-slate-900 dark:text-white">Professional Certifications</h4>
                  <p className="text-sm text-pink-600 dark:text-pink-400 font-semibold mb-2">Various Platforms (2020 - Present)</p>
                  <p className="text-slate-700 dark:text-slate-300">AWS Solutions Architect • Google Cloud Professional • Meta React Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default UltimateAboutMe;