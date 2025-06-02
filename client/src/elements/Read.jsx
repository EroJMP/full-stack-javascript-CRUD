import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Read() {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`/get_students/${id}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }, [id])
  return (
    <div className="container-fluid vw-100 vh-100 bg-primary d-flex flex-column align-items-center py-5">
    <h1 className="text-white mb-4">User {id}</h1>
    <Link to="/" className="btn btn-success mb-4">
        Back
    </Link>

    {data.map((student) => (
        <div key={student.id} className="card shadow-sm w-50">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
            <strong>ID:</strong> {student.id}
            </li>
            <li className="list-group-item">
            <strong>Name:</strong> {student.name}
            </li>
            <li className="list-group-item">
            <strong>Email:</strong> {student.email}
            </li>
            <li className="list-group-item">
            <strong>Age:</strong> {student.age}
            </li>
            <li className="list-group-item">
            <strong>Gender:</strong> {student.gender}
            </li>
        </ul>
        </div>
    ))}
    </div>
  )
}

export default Read
