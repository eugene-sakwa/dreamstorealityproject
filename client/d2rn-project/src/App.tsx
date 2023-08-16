import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import NavBar from "./Components/NavBar";
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";
import Mentors from "./pages/Mentors";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";
import RegisterMentor from "./pages/RegisterMentor";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={AboutUs} />
        <Route path="/contact" Component={ContactUs} />
        <Route path="/mentors" Component={Mentors} />
        <Route path="/register" Component={RegisterUser} />
        <Route path="/login" Component={Login} />
        <Route path="/registermentor" Component={RegisterMentor} />
      </Routes>
      <CallToAction />
      <Footer />
    </Router>
  );
}

export default App;
