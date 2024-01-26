import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./page/Page";
import { cartReducer, initialState } from "./reducers/cartReducer";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
