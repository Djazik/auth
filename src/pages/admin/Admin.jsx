import React from 'react'
import { useGetUsersQuery } from '../../context/api/userApi'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "./style.css"
const Admin = () => {
  const {data} = useGetUsersQuery()
 

 
  return (
    <div>

        <div className='admin container'>
      <div className="admin__sidebar">
        <ul>
          <li><Link to="usercreate">Create User</Link></li>
          <li><Link to="usermanage">Manage User</Link></li>
          <li><Link to="productcreate">Create Product</Link></li>
          <li><Link to="productmanage">Manage Product</Link></li>
        </ul>
      </div>
      <div className="admin__content">
        <Outlet/>
      </div>
    </div>
   <div className="admin__pro container ">
   <h2 className='admin__title'>Admin</h2>
      <ul className='admin__ul'>
        {data?.data?.users?.map((user)=> (

        <li className='admin__li'  key={user.id}>{user.FirstName}</li>
        ))}
      </ul>
   </div>
    </div>
  )
}

export default Admin