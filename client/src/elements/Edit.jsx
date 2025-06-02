import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Edit() {
    const [data, setData] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`/get_students/${id}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }, [id])

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        axios.post(`/edit_user/${id}`, data[0])
        .then((res)=>{
            navigate('/')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div className="container-fluid vw-100 vh-100 bg-primary d-flex flex-column align-items-center py-5">
    <h1 className="text-white mb-4">User {id}</h1>
    <Link to="/" className="btn btn-success mb-4">
        Back
    </Link>

    {data.length > 0 && (
        <div className="card shadow-sm w-50">
        <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
                value={data[0].name}
                type="text"
                name="name"
                id="name"
                className="form-control"
                onChange={(e) => setData([{ ...data[0], name: e.target.value }])}
                required
            />
            </div>

            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                value={data[0].email}
                type="email"
                name="email"
                id="email"
                className="form-control"
                onChange={(e) => setData([{ ...data[0], email: e.target.value }])}
                required
            />
            </div>

            <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender</label>
            <input
                value={data[0].gender}
                type="text"
                name="gender"
                id="gender"
                className="form-control"
                onChange={(e) => setData([{ ...data[0], gender: e.target.value }])}
                required
            />
            </div>

            <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input
                value={data[0].age}
                type="number"
                name="age"
                id="age"
                className="form-control"
                onChange={(e) => setData([{ ...data[0], age: e.target.value }])}
                required
                min="1"
            />
            </div>

            <button type="submit" className="btn btn-primary w-100">
            Save Changes
            </button>
        </form>
        </div>
    )}
    </div>

  )
}

export default Edit
