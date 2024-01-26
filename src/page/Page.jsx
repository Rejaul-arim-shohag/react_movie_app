import  { useContext } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Cinema from "../components/Cinema/Cinema";
import { ThemeContext } from "../context";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <Cinema />
        </div>
      </main>
    </div>
  );
}
