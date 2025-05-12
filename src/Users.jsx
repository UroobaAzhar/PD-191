import { useState } from "react";
import { useGetAllUsersQuery } from "./storetwo/usersApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { data, isLoading, isSuccess } = useGetAllUsersQuery();

  if (isSuccess && data && !users.length) {
    setUsers(data.users);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    console.log("No user detected");
    return <div>No users available</div>;
  }

  console.log(users);

  return (
    <div>
      <h1>Users</h1>
      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {users.map((user, index) => (
          <li key={index}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
