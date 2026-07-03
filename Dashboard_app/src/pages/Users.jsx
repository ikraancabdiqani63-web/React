import { useState } from "react";
import MainLayout from "../Layouts/MainLayout";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@gmail.com",
      role: "User",
      status: "Pending",
    },
    {
      id: 3,
      name: "David Brown",
      email: "david@gmail.com",
      role: "Manager",
      status: "Inactive",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active",
  });

  const [search, setSearch] = useState("");

  const addUser = () => {
    if (!newUser.name || !newUser.email) {
      alert("Please fill all fields");
      return;
    }

    setUsers([
      ...users,
      {
        id: users.length + 1,
        ...newUser,
      },
    ]);

    setNewUser({
      name: "",
      email: "",
      role: "User",
      status: "Active",
    });

    setShowForm(false);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <MainLayout>
      <div className="users-container">
        <div className="users-header">
          <h1>Users</h1>

          <div className="header-right">
            <input
              className="search"
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="add-btn" onClick={() => setShowForm(true)}>
              ➕ Add User
            </button>
          </div>
        </div>

        {showForm && (
          <div className="user-form">
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  name: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  email: e.target.value,
                })
              }
            />

            <select
              value={newUser.role}
              onChange={(e) =>
                setNewUser({
                  ...newUser,
                  role: e.target.value,
                })
              }
            >
              <option>Admin</option>
              <option>User</option>
              <option>Manager</option>
            </select>

            <button className="save-btn" onClick={addUser}>
              💾 Save
            </button>

            <button className="cancel-btn" onClick={() => setShowForm(false)}>
              ❌ Cancel
            </button>
          </div>
        )}

        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>
                  <img
                    className="avatar"
                    src={`https://i.pravatar.cc/50?img=${user.id}`}
                    alt={user.name}
                  />
                </td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>{user.role}</td>

                <td>
                  <span className={`badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>

                <td>
                  <button className="edit-btn">✏ Edit</button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(user.id)}
                  >
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
