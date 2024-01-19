import Homepage from "./pages/home"


import { HashRouter, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
