import { useRouter } from "next/router"
import { useEffect,useState } from "react"

const UserInfoPage = () => {
  const [singleUser,setSingleUser] =useState();
  const {query} = useRouter();
  

  // GET SINGLE USERS FUNCTION
  async function fetchUsers(id) {
    console.log(id);
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    
    setSingleUser(await res.json());
  }
  useEffect(()=>{
    const id=query?.id
    
    fetchUsers(id)

  },[query])
  console.log(singleUser);
  
  return (
    <div>
     {
      singleUser ?(
        <div style={{textAlign:'center'}}> <h1>Single User</h1>
        <p>Name : {singleUser?.name}</p>
        <p>Username : {singleUser?.username}</p>
        <p>Email : {singleUser?.email}</p></div>
      ):(
        <p>Loading...</p>
      )
     }
    </div>
  )
}

export default UserInfoPage