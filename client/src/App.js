import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/registration/Registration";
import Setting from "./pages/Settings/Setting";
import Home from "./pages/Home";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  const user = false
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/addblog" element = {user ?(<Write/>):(<Register/>)}/>
          <Route path="/setting" element = {user ?(<Setting/>):(<Register/>)}/>
          <Route path="/login" element = {user ? (<Home/>):(<Login/>)}/>
          <Route path="/register" element = {user ? (<Home/>): (<Register/>)}/>
          <Route path="/post/:postid" element = {<Single/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
