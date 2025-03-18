import { Route, Routes } from "react-router-dom";
import Header from "./layouts/Header";
import SideBar from "./layouts/SideBar";
import Dashboard from "./pages/dashboard/Dashboard";
import "./styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import Requests from "./pages/requests/Requests";
function App() {
  return (
    <>
      <SideBar />
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/requests" element={<Requests />} />
      </Routes>
    </>
  );
}

export default App;
