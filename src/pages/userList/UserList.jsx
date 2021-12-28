import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import './userList.css'
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
          return(
            <div className='userListUser'>
              <img className='userListImage' src={params.row.avatar} alt="user"  />
              {params.row.username}
            </div>
          )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'transaction',
          headerName: 'Amount',
          width: 150,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 120,
          renderCell:(params) => {
            return(
              <>
                <Link to={'/user/'+params.row.id}>
                  <button className="userListEdit">Edit</button>
                </Link>
                <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.id)} />
              </>
            )
          }
        }
      ];
  
    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
