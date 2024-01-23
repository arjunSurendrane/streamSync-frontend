import { motion } from "framer-motion";
import StreamIcon from "../assets/streaming-icon.svg";
import { useNavigate } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { PATH } from "../route/path";
import { useState } from "react";
import { theme } from "../constant";

const LandingPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const navigate = useNavigate();

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800" : ""
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <motion.div
        className="mb-8"
        initial="hidden"
        animate="visible"
        variants={animationVariants}
      >
        <img src={StreamIcon} alt="Streaming Icon" className="w-28 h-28" />
      </motion.div>

      <div
        className={`text-center text-${
          isDarkMode ? theme.darkModeFont : theme.lightModeFont
        }`}
      >
        <h1 className="text-5xl font-bold mb-4">Your Streaming Platform</h1>
        <p className="text-lg mb-8">
          Go live on YouTube with our easy-to-use web application.
        </p>
        <button
          onClick={() => navigate(PATH.home)}
          className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 transition duration-300 mr-4"
        >
          Get Started
        </button>
        <button
          className="text-gray-300 hover:text-gray-100"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <FiMoon size={24} />
          ) : (
            <FiSun color={"black"} size={24} />
          )}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
