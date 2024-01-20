import Homepage from "./pages/home"
import Profile from "./pages/profile";


import { HashRouter, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}


export default App;
