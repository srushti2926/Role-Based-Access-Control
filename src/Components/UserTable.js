import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import EditModal from "./EditModal";
import { useSelector, useDispatch } from "react-redux";
import { editUser, deleteUser, toggleUserStatus } from "../Redux/userSlice";
import "./usertable.css";

function UserTable() {
  const users = useSelector((state) => state.users.users);
  const roles = useSelector((state) => state.roles.roles);
  const currentRole = useSelector((state) => state.auth.currentRole);
  const userRole = roles.find((role) => role.name === currentRole);

  const [openRowId, setOpenRowId] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = (id, updatedData) => {
    if (userRole?.permissions.includes("Write")) {
      dispatch(editUser({ id, ...updatedData }));
      setOpenRowId(null);
    } else {
      alert("You don't have permission to edit users.");
    }
  };

  const handleDelete = (id) => {
    if (userRole?.permissions.includes("Delete")) {
      dispatch(deleteUser(id));
    } else {
      alert("You don't have permission to delete users.");
    }
  };

  const handleToggleStatus = (id) => {
    if (userRole?.permissions.includes("Write")) {
      dispatch(toggleUserStatus(id));
    } else {
      alert("You don't have permission to toggle user status.");
    }
  };

  return (
    <div
      style={{
        marginTop: "5rem",
      }}
    >
      <table
        style={{
          border: "1px solid black",
          width: "100%",
        }}
        id="customers"
      >
        <thead>
          <tr
            style={{
              border: "1px solid black",
              borderCollapse: "collapse",
            }}
          >
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              Id
            </th>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              Role
            </th>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              Status
            </th>
            <th
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.status}</td>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                {userRole?.permissions.includes("Write") && (
                  <IoMdEye
                    style={{
                      cursor: "pointer",
                    }}
                    size={30}
                    onClick={() => handleToggleStatus(item.id)}
                  />
                )}
                {userRole?.permissions.includes("Write") && (
                  <MdEdit
                    style={{
                      cursor: "pointer",
                    }}
                    size={30}
                    onClick={() => setOpenRowId(item.id)}
                  />
                )}
                {userRole?.permissions.includes("Delete") && (
                  <MdDelete
                    style={{
                      cursor: "pointer",
                    }}
                    size={30}
                    onClick={() => handleDelete(item.id)}
                  />
                )}
              </td>
              {openRowId && (
                <EditModal
                  open={!!openRowId}
                  setOpen={setOpenRowId}
                  {...users.find((user) => user.id === openRowId)}
                  onSave={(updatedData) => handleEdit(openRowId, updatedData)}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
