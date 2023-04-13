import React, { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Akshi", isEnabled: true },
    { id: 2, name: "Sree", isEnabled: true },
    { id: 3, name: "Barani", isEnabled: true },
    { id: 4, name: "Gnani", isEnabled: true },
    { id: 5, name: "Pranauv", isEnabled: true },
    { id: 6, name: "Damon", isEnabled: true },
    { id: 7, name: "Stefan", isEnabled: true },
    { id: 8, name: "Elena", isEnabled: true },
    { id: 9, name: "Katherine", isEnabled: true },
    { id: 10, name: "Klaus", isEnabled: true },
    { id: 11, name: "Elijah", isEnabled: true },
    { id: 12, name: "Kol", isEnabled: true },
    { id: 13, name: "Rebakah", isEnabled: true },
    { id: 14, name: "Kai", isEnabled: true },
    { id: 15, name: "Bonnie", isEnabled: true },
    { id: 16, name: "Alaric", isEnabled: true },
    { id: 17, name: "Caroline", isEnabled: true },
    { id: 18, name: "Matt", isEnabled: true },
    { id: 19, name: "jeremy", isEnabled: true },
    { id: 20, name: "Jane ", isEnabled: true },
  
    
    
  ]);

  const handleEnableDisable = (id) => {
    const newUsers = [...users];
    const index = newUsers.findIndex((user) => user.id === id);
    newUsers[index].isEnabled = !newUsers[index].isEnabled;
    setUsers(newUsers);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-2">User List</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">User Name</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">
                <button
                  className={`${
                    user.isEnabled ? "bg-green-500" : "bg-red-500"
                  } hover:${
                    user.isEnabled ? "bg-green-600" : "bg-red-600"
                  } text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleEnableDisable(user.id)}
                >
                  {user.isEnabled ? "Disable" : "Enable"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
