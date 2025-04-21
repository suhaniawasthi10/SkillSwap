import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import React from "react";

const Profile = () => {
  const { user } = useAuth();
  const [skills, setSkills] = useState([
    { id: 1, title: "JavaScript", description: "Programming language for web development." },
    { id: 2, title: "React", description: "JavaScript library for building UIs." },
    { id: 3, title: "Node.js", description: "JavaScript runtime for backend development." },
  ]);
  const [newSkill, setNewSkill] = useState({ title: "", description: "" });

  // Add a new skill to the list
  const handleAddSkill = () => {
    if (newSkill.title.trim() && newSkill.description.trim()) {
      setSkills([
        ...skills,
        { id: skills.length + 1, title: newSkill.title, description: newSkill.description },
      ]);
      setNewSkill({ title: "", description: "" });
    }
  };

  // Remove a skill from the list
  const handleRemoveSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <div className="mb-6">
          <img
            src={`https://ui-avatars.com/api/?name=${user}&size=128`}
            alt="Profile Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Profile Details */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-blue-600">{user}'s Profile</h2>
          <p className="text-gray-600 mt-2 text-lg">Welcome to your personal space!</p>
        </div>

        {/* Add Skill Section */}
        <div className="w-full mt-8">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Add a New Skill</h3>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Skill Title"
              value={newSkill.title}
              onChange={(e) => setNewSkill({ ...newSkill, title: e.target.value })}
              className="p-2 w-full border rounded mb-4"
            />
            <input
              type="text"
              placeholder="Skill Description"
              value={newSkill.description}
              onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
              className="p-2 w-full border rounded mb-4"
            />
            <button
              onClick={handleAddSkill}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Add Skill
            </button>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full mt-8">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Your Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition relative">
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-gray-700 mb-2">{skill.description}</p>
                <button
                  onClick={() => handleRemoveSkill(skill.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Contact Information</h3>
          <p className="text-gray-600">Email: {user.toLowerCase()}@example.com</p>
          <p className="text-gray-600">Location: City, Country</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
