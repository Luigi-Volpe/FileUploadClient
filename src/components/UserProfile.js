import React from "react";
import Documents from "./Documents";

const UserProfile = ({userProfile, getDocument}) => {
    return(
        <div className={"UserProfile"}>
            <h1>{userProfile.name}</h1>
            <Documents
                userId={userProfile.id}
                getDocument={getDocument}
            />
        </div>
    )
}
export default UserProfile