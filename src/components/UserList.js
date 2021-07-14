import React from "react";
import UserCard from "./UserCard";

function UserList({ users, onChangeUser }) {
  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => onChangeUser(user)}
          {...user}
        />
      ))}
    </div>
  );
}

export default UserList;
