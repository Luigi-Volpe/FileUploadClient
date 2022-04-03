import Button from "./Button";
import UpdateFile from "./UpdateFile";
import {useState} from "react";

const Document = ({document, getDocument, deleteDocument, fetchDocumentsOfUser,userId}) =>{

    const[show, setShow]=useState(false)

    const showUpdate = (show) => {
      setShow(!show)
    }

    return(
        <div className={"Document"}>
            <h4>name</h4>
            <p>{document.docName}</p>
            <h4>doctype</h4>
            <p>{document.docType}</p>
            <Button
                text={"Download"}
                doSomething={() => getDocument(document.id,document.docName)}
            />
            <Button
                text={"Update"}
                doSomething={() => showUpdate(show)}
            />
            <Button
                text={"Delete"}
                doSomething={() => deleteDocument(document.id)}
            />
            {show && <UpdateFile
                fetchDocumentsOfUser={fetchDocumentsOfUser}
                fileId={document.id}
                userId={userId}
                setShow ={setShow}
            />}
        </div>
    )
}

export default Document