import UserProfile from "./UserProfile";

const UserProfiles = ({userProfiles, getDocument}) => {
    return(
        <>
            {userProfiles.map((userProfile) =>
            <UserProfile
                key={userProfile.id}
                userProfile={userProfile}
                getDocument={getDocument}
            />
            )}
        </>
    )
}
export default UserProfiles