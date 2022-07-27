import axios from "axios";
import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Adduser = () => {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobNumber, setMobNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");

  // useEffect(()=>{
  //   // alert("Clicked");
  // }, [srNo]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const dataObj = {
      firstName,
      lastName,
      mobNumber,
      email,
      password
    }
    console.log(dataObj);
    axios.post("http://localhost:5000/user", dataObj)

    setFirstName("");
    setLastName("");
    setMobNumber("");
    setPassword("");

    alert("Data Add Successfully");

    navigate("/home");
  }


  return (
    <>

      <div className="container">
        <form onSubmit={SubmitHandler}>
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
          <button class="btn btn-primary mt-3" type="submit" >Add User</button>
        </form>
      </div>

    </>
  );
}
export default Adduser;




