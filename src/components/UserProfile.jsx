import react from 'react';
function UserProfile({name,age}){
     console.log(`renedering the profile of the user ${name}`);
     return (
        <>
        <p>{name}</p>
        <p>{age}</p>
        </>
     )
     const memoized=React.memo(UserProfile);
}
export default UserProfile;