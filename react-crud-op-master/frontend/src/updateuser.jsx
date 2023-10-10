import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function UpdateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3003/getUser/${id}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }, []);
  const { id } = useParams();
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center ali+gn-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form>
          <h2>Update User</h2>
          <div className="'mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" />
          </div>
          <div className="'mb-2">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter Email" className="form-control" />
          </div>
          <div className="'mb-2">
            <label htmlFor="">Age</label>
            <input type="text" placeholder="Enter Age" className="form-control" />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}
export default UpdateUser;