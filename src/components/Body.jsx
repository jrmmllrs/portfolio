import profilePicture from "../assets/testprofile.jpg";


function PortfolioBody() {
  return (
<div>
  <section className="max-w-6xl mx-auto mt-24 px-6 flex flex-col md:flex-row items-center gap-12 h-180 scroll-mt-24" id="home">
   
    <div className="text-center md:text-left md:flex-1">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
        Hi, I’m <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Jeromeeeeeeeee</span>
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed mb-8">
        A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Software Engineer</span> specializing in building (and occasionally designing) exceptional digital experiences.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
          <a href="#projects">View Projects</a>
        </button>
        <button className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Contact Me
        </button>
      </div>
    </div>
   
    <div className="md:flex-1 flex justify-center md:justify-end relative">
      <div className="relative group">
        <img
          src={profilePicture}
          alt="Jerome"
          className="rounded-2xl shadow-2xl max-w-xs sm:max-w-sm lg:max-w-md transition-transform duration-300 group-hover:scale-105"
        />
       
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl group-hover:opacity-30 transition"></div>
      </div>
    </div>
  </section>
</div>

  );
}

export default PortfolioBody;
