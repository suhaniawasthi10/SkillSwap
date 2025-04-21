import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/explore");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all">
      {/* Hero Section */}
      <div className="h-[75vh] flex items-center justify-center px-6 py-12 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-3xl text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white leading-tight mb-6 animate-fade-in">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400">SkillSwap</span>{" "}
            🎓
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 animate-fade-in-slow">
            Discover skills. Share knowledge. Grow together. Learn from peers
            and teach what you love!
          </p>
          <button
            onClick={handleLearnMore}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg transition-all duration-300 animate-fade-in-slow transform hover:scale-105"
          >
            🚀 Get Started
          </button>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-800 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-left text-blue-600 dark:text-blue-400 mb-8">
            Our Learners Speak
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                review:
                  "SkillSwap made learning React so much easier! I found a great tutor quickly.",
                name: "John Smith",
              },
              {
                review:
                  "I learned so much about JavaScript. SkillSwap is perfect for peer-to-peer learning.",
                name: "Alice Johnson",
              },
              {
                review:
                  "Amazing platform! The tutor I found helped me master Python in just a few weeks.",
                name: "Michael Brown",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <p className="text-gray-700 dark:text-gray-200 mb-4 italic">
                  “{item.review}”
                </p>
                <h4 className="font-semibold text-blue-600 dark:text-blue-300">
                  - {item.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 py-12">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-left text-blue-600 dark:text-blue-400 mb-8">
      Popular Skill Categories
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "JavaScript", description: "Learn the core of web development", link: "/explore" },
        { title: "React", description: "Build interactive UIs with React", link: "/explore" },
        { title: "Python", description: "Master Python for data science and web development", link: "/explore" },
        { title: "Node.js", description: "Build server-side apps with Node.js", link: "/explore" },
        { title: "CSS", description: "Style beautiful web pages with CSS", link: "/explore" },
        { title: "SQL", description: "Master database management with SQL", link: "/explore" },
      ].map((category, idx) => (
        <div key={idx} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-300 mb-4">
            {category.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-200 mb-4">{category.description}</p>
          <button
            onClick={() => window.location.href = category.link}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Explore {category.title}
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="px-6 py-6 text-center bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
        <p>© 2025 Suhani's SkillSwap</p>
        <div className="mt-2 flex justify-center gap-6 text-lg">
          <a href="/about" className="hover:underline text-blue-600 dark:text-blue-400">
            About
          </a>
          <a href="#" className="hover:underline text-blue-600 dark:text-blue-400">
            Contact
          </a>
          <a href="#" className="hover:underline text-blue-600 dark:text-blue-400">
            Privacy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;

