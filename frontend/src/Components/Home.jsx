import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Filterbar from './Filterbar';


const Home = () => {

  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user")
      .then(async (res) => {
        // console.log(res.data)
        const rawData = await res.data;
        console.log(rawData);

        setUserData(rawData);
      }).catch(err => console.log(err));
  }, []);

  const searchHolder = "Search full data";

  const filterData = (value) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setUserData(userData);
      window.location.reload();
    }
    else {
      const filteredData = userData.filter((item) => {
        return (
          Object.keys(item).some((key) => {
            return (
              item[key].toString().toLowerCase().includes(lowerCaseValue)
            )
          })
        )
      })
      setUserData(filteredData);
    }
  }

  const handleChange = (value) => {
    filterData(value);
  }
  // const deletUser = (_id) => {
  //     axios.delete(`http://localhost:5000/user/${_id}`)
  //     alert("delete Successfully");
  //     window.location.reload();
  // }

  return (
    <>
      <div className="container mt-4 ">

        <Filterbar handleChange={handleChange} searchHolder={searchHolder} />

        <NavLink to="/adduser"><button class="btn btn-primary me-5 ms-5">Add User</button></NavLink>
        <NavLink to="/login"><button className="btn btn-primary  ">Login</button></NavLink>
        <div className='row'>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">SR.NO</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Mobile No</th>
                <th scope="col">Email</th>
                <th scope="col">Edit User</th>
                <th scope="col">Delete User</th>

              </tr>
            </thead>

            <tbody>
              {
                userData.map((row, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{row.firstName}</td>
                      <td>{row.lastName}</td>
                      <td>{row.mobNumber}</td>
                      <td>{row.email}</td>
                      <td>
                        <NavLink exact to={`/edit/${row._id}`}>
                          <button type="button" class="btn btn-success">Edit User</button>
                        </NavLink>
                      </td>
                      <td>
                        <NavLink exact to={`/delete/${row._id}`}>
                          <button type="button" class="btn btn-danger"  >Delete User</button>
                        </NavLink>
                      </td>
                    </tr>

                  );
                })
              }
            </tbody>

          </table>


        </div>

        <select>
          {
            userData.map((row) => {
              return (
                <option>{row.firstName}</option>
              );
            })
          }
        </select>

        <input type="text" list='option' />
        <datalist id='option'>
          {
            userData.map((row) => {
              return (
                <option>{row.firstName}</option>
              )
            })
          }
        </datalist>
      </div>
      {/* < div className='pink'>
        <p>Start</p>
      </div>
      <div className='blue'>
        <p>End</p>
        <button className='btn btn-success' onClick={() => navigate("/demo")} >Demo</button>
      </div> */}
    </>
  );
}
export default Home;





// onClick={() => deletUser(row._id)}