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
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto mb-20  px-6 text-center scroll-mt-24"
    >
      {/* Section Title */}
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12">
        Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Code className="mx-auto text-blue-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Web Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Building responsive, high-performance websites using modern
            frameworks like React, Node.js, and Tailwind.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Smartphone className="mx-auto text-purple-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Mobile Apps
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Creating sleek and scalable mobile apps that deliver seamless user
            experiences on iOS and Android.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Server className="mx-auto text-pink-600 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Backend & APIs
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Designing reliable and secure backend systems with RESTful APIs,
            database management, and cloud integration.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Palette className="mx-auto text-yellow-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            UI/UX Design
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Crafting modern, user-friendly designs with a focus on usability,
            accessibility, and aesthetics.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Cloud className="mx-auto text-green-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Cloud Solutions
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Deploying and managing scalable apps with cloud services like AWS,
            Azure, and Firebase.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Shield className="mx-auto text-red-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Security & Optimization
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Implementing best practices in security, performance optimization,
            and code quality assurance.
          </p>
        </div>

        {/* Service 7 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Database className="mx-auto text-indigo-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Database Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Designing and optimizing relational and NoSQL databases for
            scalability and performance.
          </p>
        </div>

        {/* Service 8 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Globe className="mx-auto text-teal-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            SEO & Web Performance
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Enhancing visibility, speed, and accessibility to improve user
            experience and search engine rankings.
          </p>
        </div>

        {/* Service 9 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition transform">
          <Settings className="mx-auto text-orange-500 mb-4" size={32} />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            DevOps & Automation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Streamlining development workflows with CI/CD, Docker, and automated
            deployment pipelines.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
