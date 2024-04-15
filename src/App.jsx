import "./assets/libs/boxicons-2.1.1/css/boxicons.min.css";
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import MainLayout from "./layout/MainLayout";
import Nano from "./pages/nano/Nano"
import Report from "./pages/report/Report";
import Settings from "./pages/settings/Settings";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/login/ProtectedRoute";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="nano" element={<Nano/>} />
            <Route path="reports" element={<Report/>} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
