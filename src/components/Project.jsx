function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto mt-24 px-6 h-180 scroll-mt-40">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
        Projects
        <span className="block w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Project Card */}
        <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
          {/* Image Placeholder */}
          <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
            Project One
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
              Task Tracker App
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              A full-stack web app built with React and Node.js that helps users
              track their tasks efficiently.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center text-white font-semibold text-lg">
            Project Two
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition">
              Portfolio Website
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              A sleek portfolio website built with React and Tailwind CSS
              showcasing my skills and projects.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white font-semibold text-lg">
            Project Three
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition">
              E-Commerce Prototype
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              An e-commerce platform prototype with shopping cart and payment
              integration.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-green-600 dark:text-green-400 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <span className="ml-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
