import React, {useCallback} from "react";
import axios from "axios";
import {useDropzone} from "react-dropzone";

const MyDropzone = ({userProfileId, fetchDocumentsOfUser,update,dontpost}) => {
    const onDrop = useCallback(acceptedFiles => {

        if (dontpost){
            update(acceptedFiles[0])
        }

        if (!dontpost){
        const formData = new FormData();
        acceptedFiles.map((file) =>{
            formData.append("files",file);
        })

        axios.post(`http://localhost:8080/api/documents/${userProfileId}`,
            formData,
            {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            .then(() =>{
                console.log("file uploaded")
                fetchDocumentsOfUser(userProfileId);
            }).catch(e =>{
            console.log(e);
        })}

    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div className={"DropBox"} {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default MyDropzone