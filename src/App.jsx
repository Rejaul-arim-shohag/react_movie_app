import { useState } from "react";
import Cinema from "./components/Cinema/Cinema";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { MovieContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <MovieContext.Provider value={{ cartData, setCartData }}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />
          <Cinema />
        </div>
      </main>
    </MovieContext.Provider>
  );
}

export default App;
