import "./App.css";

import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ReportedCrimes from "./components/ReportedCrimes";
import Login from "./components/Login";
import AddCrime from "./components/AddCrime";
import ReportCrime from "./components/ReportCrime";

function App() {
  const isLoggedIn = localStorage.getItem("auth") === "true";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={isLoggedIn ? <ReportedCrimes /> : <Login />}
          ></Route>

          <Route exact path="/new-crime-scene" element={<AddCrime />}></Route>
          <Route exact path="/" element={<ReportCrime />}></Route>
          <Route exact path="/login" element={<Login />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
