import Home from "./Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Media query to check OS preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      // Only switch dynamically if the user hasn't explicitly set a local theme
      if (!("theme" in localStorage)) {
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);
  return (
    <div className="dark:bg-[#0f0f0f] dark:text-white  transition-colors duration-500">
      <Home />
    </div>
  );
}

export default App;
