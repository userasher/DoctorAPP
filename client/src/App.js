import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import Spinner from "./components/spinner";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoutes from "./components/PublicRoutes";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <HomePage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoutes>
                  <ApplyDoctor />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoutes>
                  <Users />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoutes>
                  <Doctors />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoutes>
                  <Profile />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/notification"
              element={
                <ProtectedRoutes>
                  <NotificationPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoutes>
                  <Login />
                </PublicRoutes>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoutes>
                  <Register />
                </PublicRoutes>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
