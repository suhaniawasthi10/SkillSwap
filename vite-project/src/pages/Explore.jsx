
// import { useEffect, useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Explore = () => {
//   const [skills, setSkills] = useState([]);
//   const [filteredSkills, setFilteredSkills] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const { isLoggedIn } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("/api/skills")
//       .then((response) => response.json())
//       .then((data) => {
//         setSkills(data.skills);
//         setFilteredSkills(
//           data.skills.filter((skill) => {
//             const matchesSearchQuery = skill.title.toLowerCase().includes(searchQuery.toLowerCase());
//             const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
//             return matchesSearchQuery && matchesCategory;
//           })
//         );
//         setLoading(false);
//       });
//   }, [searchQuery, selectedCategory]);

//   const handleLearnMore = (id) => {
//     navigate(`/skills/${id}`);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-blue-600 mb-6">Explore Skills</h2>

//       <div className="mb-6 flex gap-4">
//         <input
//           type="text"
//           placeholder="Search for skills..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="p-2 border rounded w-full"
//         />
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="p-2 border rounded"
//         >
//           <option value="All">All Categories</option>
//           <option value="Web Development">Web Development</option>
//           <option value="Data Science">Data Science</option>
//           <option value="Design">Design</option>
//         </select>
//       </div>

//       {loading ? (
//         <div className="text-center text-gray-500">Loading skills...</div>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill) => (
//             <div
//               key={skill.id}
//               className="border p-4 rounded-lg shadow hover:shadow-lg transition"
//             >
//               <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
//               <p className="text-gray-700 mb-2">{skill.description}</p>
//               <button
//                 onClick={() => handleLearnMore(skill.id)}
//                 className="mt-3 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition"
//               >
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Explore;
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // You might want to replace this fetch with your mock API if using MirageJS
    fetch("/api/skills")
      .then((response) => response.json())
      .then((data) => {
        if (data.skills) {
          setSkills(data.skills);
        } else {
          setSkills([]); // In case no skills returned
        }
        setFilteredSkills(
          data.skills.filter((skill) => {
            const matchesSearchQuery = skill.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || skill.category === selectedCategory;
            return matchesSearchQuery && matchesCategory;
          })
        );
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skills:", error);
        setLoading(false);
      });
  }, [searchQuery, selectedCategory]);

  const handleLearnMore = (id) => {
    navigate(`/skills/${id}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Explore Skills</h2>

      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search for skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Design">Design</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading skills...</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <div
                key={skill.id}
                className="border p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <button
                  onClick={() => handleLearnMore(skill.id)}
                  className="mt-3 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition"
                >
                  Learn More
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">No skills found matching your criteria.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Explore;
