function Props(props){
               return(
                <>
  {
  props.isLoggedIn?<h1>hello {props.name}</h1>:<h2>please login</h2>
}

                </>
               );
}
export default Props;