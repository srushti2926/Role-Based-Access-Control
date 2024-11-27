import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCurrentRole } from "../Redux/authSlice";

function Navbar() {
  const roles = useSelector((state) => state.roles.roles);
  const currentRole = useSelector((state) => state.auth.currentRole);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userRole = roles.find((role) => role.name === currentRole);
  const handleLogout = () => {
    dispatch(clearCurrentRole());
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderBottom: "1px solid black",
        padding: "1rem 0",
      }}
    >
      {userRole?.permissions.includes("Read") && (
        <div style={{ cursor: "pointer" }}>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={"/usertable"}
          >
            <h3>View Users</h3>
          </Link>
        </div>
      )}
      {userRole?.permissions.includes("Write") &&
        userRole?.permissions.includes("Delete") && (
          <div style={{ cursor: "pointer" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={"/addpermission"}
            >
              <h3>Add Permission</h3>
            </Link>
          </div>
        )}
      <div style={{ cursor: "pointer" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
          to={"/"}
          onClick={handleLogout}
        >
          <h3>Logout</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
