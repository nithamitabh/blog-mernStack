import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Registration";
import Setting from "./pages/Settings/Setting";
import Home from "./pages/Home";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/addblog" element = {<Write/>}/>
          <Route path="/setting" element = {<Setting/>}/>
          <Route path="/single" element = {<Single/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
