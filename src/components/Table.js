import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Form from './Form';

const API="https://jsonplaceholder.typicode.com/users"

const Table = () => {
    const [users,setUsers]=useState([])
    const [isClicked,setIsClicked]=useState(false)
    const getUser=async ()=>{
        const res=await axios.get(API);
        console.log(res.data)
        setUsers(res.data)
    }
    useEffect(()=>{
        getUser()
    },[])
    const handleAdd=()=>{
        console.log("button clicked")
        setIsClicked(true)
    }
    return (
        <div className='container' >
        {isClicked ? (<Form />) :
          (
            <>
             <button className='ui icon button' style={{marginTop:"30px"}} onClick={handleAdd}>
             <i className="plus icon"></i>
              </button>
            
               <table className='table'>
                   <thead style={{backgroundColor:"#0080C0" ,color:"#fff"}}>
                       <tr>
                           <th scope='col'>id</th>
                           <th scope='col'>Name</th>
                           <th scope='col'>User name</th>
                           <th scope='col'>city</th>
                           <th scope='col'>suite</th>
                           <th scope='col'>zipcode</th>
                       </tr>
                   </thead>
                   <tbody>
                       {users.map(user=>{
                           return(
                            <tr key={user.id}>
                                <th scope='row'>{user.id}</th>
                                <td>{user.name}</td>
                                <td >{user.username}</td>
                                <td >{user.address.city}</td>
                                <td >{user.address.suite}</td>
                                <td >{user.address.zipcode}</td>
        
                            </tr>
                           )})}
                    </tbody>

               </table>
            </>
        )}
        </div>
    )
}

export default Table
