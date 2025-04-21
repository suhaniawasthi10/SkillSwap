import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SkillDetail = () => {
  const { id } = useParams(); // Get the skill ID from the URL
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    // Fetch skill details based on the ID from the URL
    fetch(`/api/skills/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched skill data:", data); // Log the fetched data
        if (data.error) {
          // If there's an error, handle it gracefully
          setSkill(null);
        } else {
          setSkill(data); // Set skill data if valid
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching skill:", error); // Log any errors
        setLoading(false);
        setSkill(null);
      });
  }, [id]);

  const handleRequestSession = () => {
    // Handle "Request a Session" button functionality
    alert(
      `Requesting a session for ${skill.title} with tutor ${skill.tutorName}`
    );
    // You can extend this functionality to make an API call to request the session.
  };

  // If loading or skill is not found
  if (loading) {
    return (
      <div className="text-center text-gray-500">Loading skill details...</div>
    );
  }

  if (!skill) {
    return <div className="text-center text-red-500">Skill not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <button
        onClick={() => history.goBack()}
        className="text-blue-600 mb-4 inline-block"
      >
        Back to Explore
      </button>
      <h2 className="text-3xl font-bold text-blue-600 mb-6">{skill.title}</h2>
      <p className="text-xl text-gray-700 mb-4">{skill.description}</p>

      <div className="mb-4">
        <strong>Tutor: </strong>
        {skill.tutorName}
      </div>
      <div className="mb-4">
        <strong>Duration: </strong>
        {skill.duration}
      </div>

      <button
        onClick={handleRequestSession}
        className="bg-green-600 text-white py-2 px-6 rounded mt-6 hover:bg-green-700 transition"
      >
        Request a Session
      </button>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Rate Your Tutor
        </h3>
        <p className="text-gray-600 mb-4">
          Submit your rating after you finish the session.
        </p>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Submit Rating
        </button>
      </div>
    </div>
  );
};

export default SkillDetail;
