import React from "react";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* 1. Introduction */}
        <section>
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            About SkillSwap
          </h1>
          <p className="text-lg">
            SkillSwap is a peer-to-peer platform that connects learners and
            tutors to share knowledge and grow together. Whether you're here to
            teach a skill or learn one, SkillSwap empowers you to connect with
            like-minded people and collaborate for success.
          </p>
        </section>

        {/* 2. How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            How It Works
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-lg">
            <li>Sign up or log in to your SkillSwap account.</li>
            <li>Explore available skills shared by fellow users.</li>
            <li>Request a session with a tutor who matches your interests.</li>
            <li>Connect, schedule, and start learning or teaching!</li>
          </ol>
        </section>

        {/* 3. Getting Started */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Getting Started
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>
              Create a profile that reflects your interests and strengths.
            </li>
            <li>Add skills you can teach, and your availability.</li>
            <li>Search for skills you're interested in learning.</li>
            <li>Start connecting with other users right away!</li>
          </ul>
        </section>

        {/* 4. FAQs */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-lg">
            <div>
              <strong>Q: Is SkillSwap free to use?</strong>
              <p>
                A: Yes! SkillSwap is completely free to use for both learners
                and tutors.
              </p>
            </div>
            <div>
              <strong>Q: Can I be both a learner and a tutor?</strong>
              <p>
                A: Absolutely! You can add skills to teach and explore other
                skills to learn.
              </p>
            </div>
            <div>
              <strong>Q: How are sessions conducted?</strong>
              <p>
                A: You can coordinate with your match to use your preferred
                online platform (like Zoom, Meet, etc.).
              </p>
            </div>
          </div>
        </section>

        {/* 5. Contact Info */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            Contact Us
          </h2>
          <p className="text-lg mb-4">
            Have questions or feedback? Feel free to email us at:{" "}
            <a
              href="mailto:contact@skillswap.com"
              className="text-blue-500 hover:underline"
            >
              contact@skillswap.com
            </a>
          </p>

          <form className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Doe"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@example.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default About;
