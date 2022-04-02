import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    let navigate = useNavigate()
    
    let {id} = useParams()

    const [users,setUsers] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    })

   const {name,username,email,phone,website} = users

   

    useEffect(()=>{
        loadUser()
    },[]) 

    const onSubmit = async (e)=>{
       e.preventDefault()
      
       await axios.put(`http://localhost:3002/users/${id}`,users)

       navigate('/')
    
    }  
  


    const loadUser= async ()=>{
    const result = await axios.get(`http://localhost:3002/users/${id}`)
    setUsers(result.data)

    }

        
    const OnInputChange = (e) =>{
   
     setUsers({...users,[e.target.name]:e.target.value})
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <div className='row '>
                    <div className='col-md-6 mx-auto'>
                        <div className='card shadow '>
                            <div className='card-body'>
                                <h4 className='card-title text-center'>Edit A User</h4>
                                <form onSubmit={(e)=>onSubmit(e)}  >
                                    <div className='form-group'>
                                        <label className='form-label'>Name</label>
                                        <input type='text' className='form-control mb-2' value={name} name='name' onChange={(e)=>OnInputChange(e)} />
                                    </div>
                                    <div className='form-group'>
                                        <label  className='form-label'>Username</label>
                                        <input type='text' className='form-control mb-2' value={username} name='username' onChange={(e)=>OnInputChange(e)} />
                                    </div>
                                    <div className='form-group'>
                                        <label  className='form-label'>Email</label>
                                        <input type='text' className='form-control mb-2' value={email} name='email'  onChange={(e)=>OnInputChange(e)} />
                                    </div>
                                    <div className='form-group'>
                                        <label  className='form-label'>Phone</label>
                                        <input type='text' className='form-control mb-2' value={phone} name='phone'  onChange={(e)=>OnInputChange(e)} />
                                    </div>
                                    <div className='form-group'>
                                        <label  className='form-label'>Website</label>
                                        <input type='text' className='form-control mb-2' value={website} name='website' onChange={(e)=>OnInputChange(e)} />
                                    </div>
                                    <div className='d-grid'>
                              <button type='submit' className='btn btn-warning mt-2'>Update User</button>
                              </div>
                                </form>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditUser