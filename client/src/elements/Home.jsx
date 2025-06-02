import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {

    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)

    useEffect(()=>{
        if(deleted){
            setDeleted(false)
    
            axios.get('/students')
            .then((res)=>{
                setData(res.data)
            })
            .catch((err)=>console.log(err))
        }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`/delete/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className="container-fluid bg-primary vh-100 vw-100 p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-white">Student Records Table</h3>
            <Link className="btn btn-success" to="/create">
            Add Student
            </Link>
        </div>

        <div className="table-responsive bg-white rounded shadow p-3">
            <table className="table table-striped table-bordered mb-0">
            <thead className="table-dark">
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((student) => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.age}</td>
                    <td>{student.gender}</td>
                    <td>
                    <Link
                        className="btn btn-sm btn-info me-2"
                        to={`/read/${student.id}`}
                    >
                        Read
                    </Link>
                    <Link
                        className="btn btn-sm btn-warning me-2"
                        to={`/edit/${student.id}`}
                    >
                        Edit
                    </Link>
                    <button onClick = {()=> handleDelete(student.id)} className="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>

  )
}

export default Home
