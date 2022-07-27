import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();
    const { userID } = useParams();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/user/${userID}`)
            .then((res) => {
                const rawData = res.data[0];

                console.log(rawData);
                setUserData(rawData);
            }).catch((err) => console.log(err));
    }, []);


    return (
        <>
            <h1>Hello {userData.firstName}</h1>
            <button className="btn btn-dark" onClick={() => navigate("/subuser/62ceda4bee75df898d5b416f")} >User</button>
        </>
    );
}

export default Dashboard;