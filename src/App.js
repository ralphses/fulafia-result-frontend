import "./App.css";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import PasswordReset from "./components/auth/PasswordReset";
import AddCourse from "./components/course/AddCourse";
import UpdateCourse from "./components/course/UpdateCourse";
import AddDeprtment from "./components/departments/AddDeprtment";
import AllDepartment from "./components/departments/AllDepartment";
import Department from "./components/departments/Department";
import NavBar from "./components/NavBar";
import MyForm from "./components/departments/MyForm";
import NewStudent from "./components/students/NewStudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCourses from "./components/course/AllCourses";
import AllStudent from "./components/student/AllStudent";
import Logout from "./components/auth/Logout";
import Footer from "./components/Footer";
import AddStudent from "./components/student/AddStudent";
import UploadResult from "./components/result/UploadResult";

function App() {
  const isLoggedIn = localStorage.getItem("loogedIn");

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn ? <Home /> : <Login />}
          ></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/logout" element={<Logout />}></Route>
          <Route
            exact
            path="/password-reset"
            element={<PasswordReset />}
          ></Route>
          <Route
            exact
            path="/departments"
            element={isLoggedIn ? <AllDepartment /> : <Login />}
          ></Route>
          <Route
            exact
            path="/departments/view"
            element={isLoggedIn ? <Department /> : <Login />}
          ></Route>
          <Route
            exact
            path="/departments/add"
            element={isLoggedIn ? <AddDeprtment /> : <Login />}
          ></Route>
          <Route
            exact
            path="/course"
            element={isLoggedIn ? <AllCourses /> : <Login />}
          ></Route>
          <Route
            exact
            path="/course/add"
            element={isLoggedIn ? <AddCourse /> : <Login />}
          ></Route>
          <Route
            exact
            path="/student"
            element={isLoggedIn ? <AllStudent /> : <Login />}
          ></Route>
          <Route
            exact
            path="/student/add"
            element={isLoggedIn ? <AddStudent /> : <Login />}
          ></Route>
           <Route
            exact
            path="/result/upload"
            element={isLoggedIn ? <UploadResult /> : <Login />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
