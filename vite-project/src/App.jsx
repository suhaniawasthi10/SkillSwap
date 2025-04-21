
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SkillDetail from "./pages/SkillDetail";  // Import SkillDetail page
import { useAuth } from "./context/AuthContext";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={isLoggedIn ? <Explore /> : <Navigate to="/login" />} />
        <Route path="/skills/:id" element={<SkillDetail />} />  {/* Add this route */}
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
