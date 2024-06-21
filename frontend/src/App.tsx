import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Game from "./page/Game";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
