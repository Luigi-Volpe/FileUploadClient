import Document from "./Document";
import {useEffect, useState} from "react";
import axios from "axios";
import MyDropzone from "./MyDropzone";

const Documents = ({userId, getDocument}) => {

    const [documents, setDocuments] = useState([])

    const fetchDocumentsOfUser = () =>{
        axios.get(`http://localhost:8080/api/documents/${userId}`).then(res => {
            console.log(res);
            setDocuments(res.data)
        })
    }

    const deleteDocument = (id) => {
        axios.delete(`http://localhost:8080/api/documents/${id}`)
            .then(res =>{
                res.status === 200
                ? setDocuments(documents.filter((document) => document.id !== id))
                    :alert('error deleting this document')
            })
    }

    useEffect(() => {
        fetchDocumentsOfUser();
    }, [])

    return(
        <div className={"DocumentsContainer"}>
            <MyDropzone
                userProfileId={userId}
                fetchDocumentsOfUser={fetchDocumentsOfUser}
            />
            <h1>My Documents</h1>
            <div className={"DocContainer"}>
            {documents.map((document) =>
            <Document
                key = {document.id}
                document = {document}
                getDocument={getDocument}
                deleteDocument={deleteDocument}
                fetchDocumentsOfUser={fetchDocumentsOfUser}
                userId={userId}
            />
            )}
            </div>

        </div>
    )
}

export default Documents