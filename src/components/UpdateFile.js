import MyDropzone from "./MyDropzone";
import {useState} from "react";
import axios from "axios";

const UpdateFile = ({fetchDocumentsOfUser,fileId,userId,setShow}) =>{

    const [name,setName] = useState("");
    const [file,setFile] = useState();


    const updateFile = (fileId, docName) => {
        console.log(file)
        console.log(name)
        const formData = new FormData()
        if (name){
            formData.append("docName",docName)
        }
        formData.append("file",file)
        axios.put(`http://localhost:8080/api/documents/update/${fileId}`,formData,
            {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            })
            .then(() =>{
                console.log("file updated")
                fetchDocumentsOfUser(userId)
                setShow(false)
            })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name && !file) {
            alert('Please enter a name or a file')
            return
        }

        updateFile(fileId,name,file)
        setName("")
        setFile(undefined)
    }

    return(
        <div className={"UpdateContainer"}>
            <form className={"UpdateContainerForm"} onSubmit={onSubmit}>
                <div className={"InputField"}>
                    <h2>Update Document</h2>
                    <label>Enter Document name</label>
                    <input
                        type={`text`}
                        placeholder={`name`}
                        value={name}
                        onChange={(e) =>setName(e.target.value)}
                    />
                </div>
                <h3>Upload a new version (Optional)</h3>
                <MyDropzone
                    update={setFile}
                    dontpost={true}
                />
                <input className={"UpdateButton"}
                       type={"submit"}
                       value={"Update file"}
                />
            </form>
        </div>
    )
}
export default UpdateFile