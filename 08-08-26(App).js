import React from "react";
function App() {
  const users = [
    { name: "John Smith", description: "React developer" },
    { name: "Alice Johnson", description: "UI designer" },
    { name: "Bob Brown", description: "Data Scientist" }
  ];

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            style={{ fontSize: "20px", color: "green" }}
          >
            {user.name} - {user.description}
          </li>
        ))}
      </ul>

      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>description</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;