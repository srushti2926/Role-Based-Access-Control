import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { addRole, deleteRole } from "../Redux/roleSlice";
function AddPermission() {
  const roles = useSelector((state) => state.roles.roles);
  const dispatch = useDispatch();

  const [newRole, setNewRole] = useState("");
  const [newPermissions, setNewPermissions] = useState("");

  const handleAddRole = () => {
    if (newRole.trim() && newPermissions.trim()) {
      dispatch(
        addRole({
          name: newRole,
          permissions: newPermissions.split(",").map((perm) => perm.trim()),
        })
      );
      setNewRole("");
      setNewPermissions("");
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <input
          type="text"
          placeholder="Role Name"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Permissions (comma-separated)"
          value={newPermissions}
          onChange={(e) => setNewPermissions(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <IoIosAddCircle
          style={{
            cursor: "pointer",
          }}
          size={30}
          onClick={handleAddRole}
        />
      </div>

      <div
        style={{
          marginTop: "2rem",
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
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Permissions</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>
                <td>{role.permissions.join(", ")}</td>
                <td
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <MdDelete
                    style={{
                      cursor: "pointer",
                    }}
                    size={30}
                    onClick={() => dispatch(deleteRole(role.id))}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddPermission;
