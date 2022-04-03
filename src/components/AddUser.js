import {useState} from "react";

const AddUser = ({postNewUser}) =>{

    const [name,setName] = useState("");

    const onSubmit = (e) => {
      e.preventDefault()

        if (!name) {
            alert('Please enter a name')
            return
        }

        postNewUser(name)
        setName("")
    }


    return(
        <form className={"Form"} onSubmit={onSubmit}>
            <div className={"InputField"}>
                <h2>Create a new User</h2>
                <label>Enter your name</label>
                <input
                    type={`text`}
                    placeholder={`name`}
                    value={name}
                    onChange={(e) =>setName(e.target.value)}
                />
            </div>
                <input className={"ButtonContainer"}
                    type={"submit"}
                    value={"Create new User"}
                />
        </form>

    )
}
export default AddUser