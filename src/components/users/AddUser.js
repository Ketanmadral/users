import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

    let navigate = useNavigate()

    const [users,setUsers] = useState({
        name:'',
        username:'',
        email:'',
        phone:'',
        website:''
    })

    const {name,username,email,phone,website} = users

  

    const onSubmit = async (e)=>{
       e.preventDefault()
     
       await axios.post('http://localhost:3002/users',users)
       navigate('/')
    
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
                                <h4 className='card-title text-center'>Add A User</h4>
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
                              <button type='submit' className='btn btn-primary mt-2'>Add User</button>
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

export default AddUser