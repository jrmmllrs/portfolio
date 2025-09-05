function AboutMe(){
    return(
<section
  id="about"
  className="max-w-5xl mx-auto px-6 py-16"
>
  <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-2xl shadow-lg p-10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/40">
    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 relative">
      About Me
      <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"></span>
    </h2>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
      I am a <span className="font-semibold text-indigo-600 dark:text-indigo-400">dedicated software engineer </span> 
      with experience in building full-stack applications using 
      <span className="font-medium"> React, Node.js, Express, and MongoDB</span>. 
      I love solving complex problems and crafting clean, efficient code.
    </p>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
      When I’m not coding, you’ll find me exploring new technologies, reading, 
      or hiking in the mountains.
    </p>
    <div className="mt-8 flex gap-3">
      <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
        View Projects
      </button>
      <button className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
        Contact Me
      </button>
    </div>
  </div>
</section>

    );
}

export default AboutMe