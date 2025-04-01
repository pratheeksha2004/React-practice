function Conditions({isLoggedIn}){
    if(isLoggedIn){
        return<><h1>Logged in</h1></>
    }
    return<><h2>Not logged in</h2></>
}
export default Conditions;