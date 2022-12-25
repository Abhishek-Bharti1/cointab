import axios from 'axios'

import { Link } from 'react-router-dom'
import "../styles/Home.css"
const Home = () => {


const fetchUsers=()=>{
  
 
      axios.post('https://cointabservers.vercel.app/postusers')
      .then(alert('users have been fetched '))
   
    
}


const deleteUsers=()=>{
    axios.delete('https://cointabservers.vercel.app/removeusers').then(alert('users deleted successfully'))
    .catch(err=>console.log(err.message));
}

  return (
    <>
        <div>
        <button onClick={()=>fetchUsers()}>Fetch Users</button>
        <button onClick={()=>deleteUsers()}>Delete Users</button>
        <Link to='/userdetails'><button>User Details</button></Link>
        </div>

    </>
  )
}

export default Home