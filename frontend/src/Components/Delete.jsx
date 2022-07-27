import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const Delete = () => {

    const navigate = useNavigate();
    const { userID } = useParams();

    const deleteHandler = () => {
        axios.delete(`http://localhost:5000/user/${userID}`)
            .then(res => {
                alert("User Deleted Successfully");
                navigate("/home");
            })
            .catch(err => {
                alert(err);
            })
    }
    return (
        <>
            <button type="button" onClick={deleteHandler} class="btn btn-success">Delete</button>
            <button type="button" onClick={() => navigate(`/home`)} class="btn btn-success">Cancel</button>

        </>
    );
}

export default Delete;