import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {

  const navigate = useNavigate();
  const { userID } = useParams();
  console.log(userID);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobNumber, setMobNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/user/${userID}`)
      .then(async (res) => {
        // console.log(res.data)
        const rawData = await res.data[0];
        console.log(rawData);

        setFirstName(rawData.firstName);
        setLastName(rawData.lastName);
        setMobNumber(rawData.mobNumber);
        setEmail(rawData.email);
        setPassword(rawData.password);

        setUserData(rawData);
      }).catch(err => console.log(err));
  }, []);


  const updateHandler = (e) => {
    e.preventDefault();
    const dataObj = {
      firstName,
      lastName,
      mobNumber,
      email,
      password
    }

    console.log(dataObj);
    axios.put(`http://localhost:5000/user/${userID}`, dataObj)
      .then(res => {
        alert("User Updated Successfully");
        navigate("/home");
      })
      .catch(err => {
        alert(err);
      })
  }

  return (
    <>

      <div className="container">
        <form onSubmit={updateHandler}>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">First Name</label>
            <input type="text" class="form-control  w-50  p-2" id="formGroupExampleInput" name="fname" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Last Name</label>
            <input type="text" class="form-control  w-50  p-2" id="formGroupExampleInput2" placeholder="Enter Last Name" name="lname" onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Mobile Number</label>
            <input type="number" class="form-control  w-50  p-2" id="formGroupExampleInput2" placeholder="Enter Moblie Number" name="mobno" onChange={(e) => setMobNumber(e.target.value)} value={mobNumber} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Email</label>
            <input type="email" class="form-control  w-50  p-2" id="formGroupExampleInput2" placeholder="Enter Email" autoComplete="off" name="password" onChange={(e) => setEmail(e.target.value)} value={email} />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">Password</label>
            <input type="password" class="form-control  w-50  p-2" id="formGroupExampleInput2" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </div>
          <button class="btn btn-primary mt-3" type="submit" >Edit User</button>
        </form>
      </div>

    </>
  );
}
export default Edit;