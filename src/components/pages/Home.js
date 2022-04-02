import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

    const [users,setUsers] = useState([])

  useEffect(()=>{
    loadUsers()
  },[])

  const loadUsers = async () =>{
      const result = await axios.get('http://localhost:3002/users')
     setUsers(result.data)
  }

  const deleteUser =async (id)=>{
     await axios.delete(`http://localhost:3002/users/${id}`)
     loadUsers()
  }



  return (
    <div className='container'>
      <div className='py-4'>
      <h1>Home</h1>
      <table className='table'>
  <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
      users.map((user,index)=>(
        <tr>
        <th scope="row">{index+1}</th>
       
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.website}</td>
        <td>
            <Link className='btn btn-primary me-2' to={`/view/${user.id}`}>View</Link>
            <Link className='btn btn-outline-primary me-2' to={`/edit/${user.id}`}>Edit</Link>
            <button type='submit' className='btn btn-danger' onClick={()=>deleteUser(user.id)}>Delete</button>
        </td>
        </tr>
      ))
  }
    
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Home