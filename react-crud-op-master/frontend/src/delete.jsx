import React from "react";
import axios from "axios";

function UserItem({ user, onDelete }) {
  const handleDelete = () => {
    // Send a DELETE request to the server to delete the user
    axios
      .delete(`http://localhost:3003/deleteUser/${user._id}`)
      .then((response) => {
        // Handle success (optional)
        console.log("User deleted successfully:", response);
        // Call the onDelete callback to notify the parent component
        onDelete(user._id);
      })
      .catch((error) => {
        // Handle error (optional)
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default UserItem;
