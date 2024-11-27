import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function EditModal({ open, setOpen, name, role, status, onSave }) {
  const [editedName, setEditedName] = useState(name);
  const [editedRole, setEditedRole] = useState(role);
  const [editedStatus, setEditedStatus] = useState(status);

  const onCloseModal = () => setOpen(false);

  const handleSave = () => {
    onSave({
      name: editedName,
      role: editedRole,
      status: editedStatus,
    });
    onCloseModal();
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Edit User</h2>
        <form>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="name"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="role"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Role
            </label>
            <select
              id="role"
              value={editedRole}
              onChange={(e) => setEditedRole(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="status"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Status
            </label>
            <select
              id="status"
              value={editedStatus}
              onChange={(e) => setEditedStatus(e.target.value)}
              style={{ width: "100%", padding: "0.5rem" }}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}
          >
            <button
              type="button"
              onClick={onCloseModal}
              style={{
                padding: "0.5rem 1rem",
                background: "gray",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              style={{
                padding: "0.5rem 1rem",
                background: "blue",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default EditModal;
