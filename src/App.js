import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/Defaultlayout";
import Home from './page/home';
import Card from './page/Cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}> </Route>
        <Route path="" element={<Home />}></Route>
        <Route path="/Cart" element={<Card />}></Route>
      </Routes>
    </div>
  );
}

export default App;
