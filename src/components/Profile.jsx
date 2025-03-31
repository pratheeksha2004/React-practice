import imaage from '../assets/images.jpg'
const user={
   name:"pratheeksha",
   imgUrl:imaage,
   imgsize:90

};
function Profile(){
    return<>
       <h1>Name :{user.name}</h1>
       <img className='pro' src={user.imgUrl} alt='sh'/>
       <h2>imgsize:{user.imgsize}</h2>
    
    </>
}
export default Profile;