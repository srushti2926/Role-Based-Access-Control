import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserTable from "./Components/UserTable";
import AddPermission from "./Components/AddPermission";
import Auth from "./Components/Auth";
import { useSelector } from "react-redux";

function App() {
  const roles = useSelector((state) => state.roles.roles);
  const userRole = roles.find((role) => role.name === "Admin");
  return (
    <>
      <BrowserRouter>
        {userRole && userRole.name === "Admin" && <Navbar />}
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/usertable" element={<UserTable />} />
          <Route path="/addpermission" element={<AddPermission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
