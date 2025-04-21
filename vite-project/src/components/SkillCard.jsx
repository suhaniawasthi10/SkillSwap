// const SkillCard = ({ skill }) => {
//     return (
//       <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
//         <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
//         <p className="text-gray-700 mb-2">{skill.description}</p>
//         <button className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition">
//           Learn More
//         </button>
//       </div>
//     );
//   };
  
//   export { SkillCard };
  
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const SkillCard = ({ skill, onRate }) => {
  const { isLoggedIn } = useAuth();
  const [hovered, setHovered] = useState(0);

  const handleRate = (value) => {
    if (isLoggedIn) {
      onRate(skill.id, value);
    } else {
      alert("Please login to rate skills.");
    }
  };

  const renderStars = () => {
    const stars = [];
    const avg = Math.round(skill.rating);

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleRate(i)}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(0)}
          className={`cursor-pointer text-xl transition-all ${
            (hovered || avg) >= i ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
      <p className="text-xs text-gray-500">Tutor: {skill.tutor}</p>

      <div className="flex items-center gap-2 mt-2">
        {renderStars()}
        <span className="text-sm text-gray-500">({skill.rating.toFixed(1)})</span>
      </div>
    </div>
  );
};

export default SkillCard;
