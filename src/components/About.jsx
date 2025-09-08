function AboutMe() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-16 scroll-mt-10"
    >
      {/* Main Intro */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left: About Text */}
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 relative inline-block">
            About Me
            <span className="absolute left-0 -bottom-2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Jerome</span>, 
            a dedicated software engineer with a passion for creating beautiful, scalable, and user-friendly digital experiences.  
            I specialize in building full-stack applications using modern technologies like 
            <span className="font-medium"> React, Node.js, Express, and MongoDB</span>.  
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            When I’m not coding, you’ll find me exploring new technologies, reading, or hiking in the mountains.  
            I believe in continuous learning and love taking on challenges that push my skills further.
          </p>

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <a href="#contact">Let’s Connect</a>
          </button>
        </div>

        {/* Right: Skills / Highlights */}
        <div className="md:flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200/20 dark:border-gray-700/40">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Skills & Tools
          </h3>
          <ul className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 font-medium">
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">React</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">Node.js</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">Express</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">MongoDB</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">Tailwind CSS</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">Git & GitHub</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">REST APIs</li>
            <li className="hover:text-blue-600 dark:hover:text-blue-400 transition">Docker</li>
          </ul>
        </div>
      </div>

      {/* Extra Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Experience */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Experience
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-3">
            <li>
              <span className="font-medium">Software Engineer</span> – Freelance (2021 - Present)
              <p className="text-sm">Developed web apps and mobile solutions for clients worldwide.</p>
            </li>
            <li>
              <span className="font-medium">Intern Developer</span> – Tech Startup (2020)
              <p className="text-sm">Built small-scale applications and contributed to UI/UX improvements.</p>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Education
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-3">
            <li>
              <span className="font-medium">BS Computer Science</span> – Your University
              <p className="text-sm">Specialized in software engineering and full-stack web development.</p>
            </li>
            <li>
              <span className="font-medium">Certifications</span> – Online Platforms
              <p className="text-sm">React, Node.js, and Cloud Fundamentals.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
