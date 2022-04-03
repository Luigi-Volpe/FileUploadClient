import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import './App.css';
import UserProfiles from "./components/UserProfiles";
import fileDownload from "js-file-download";
import AddUser from "./components/AddUser";
import UpdateFile from "./components/UpdateFile";

function App() {
    const [userProfiles, setUserProfiles] = useState([])

    const fetchUserProfiles = () =>{
        axios.get("http://localhost:8080/api/users").then(res => {
            console.log(res);
            setUserProfiles(res.data);
        })
    }

    const getDocument = (id, fileName) =>{
        axios.get(`http://localhost:8080/api/documents/downloadFile/${id}`,{
            responseType: 'blob'
        })
            .then(res => {
                fileDownload(res.data, fileName);
        })
    }

    const postNewUser = (name) =>{
        axios.post("http://localhost:8080/api/users",{name:name})
            .then(res =>{
                res.status === 200
                    ? fetchUserProfiles()
                    : alert("Something went wrong creating new user" + name)
            })
    }



    useEffect(() => {
        fetchUserProfiles();
    }, [])



  return (
    <div className={"App"}>
        <AddUser
            postNewUser={postNewUser}
        />
        <UserProfiles
            userProfiles={userProfiles}
            getDocument={getDocument}
        />
    </div>
  );
}

export default App;