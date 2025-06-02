import React, { useState } from 'react'
import axios  from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        gender: '',
        age: ''
    })

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        axios.post('/add_user', values)
        .then((res)=>{
            navigate('/')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div className="container-fluid vw-100 vh-100 bg-primary d-flex flex-column align-items-center py-5">
        <div className="col-md-6 bg-white p-4 rounded shadow">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3>Add Student</h3>
                <Link to="/" className="btn btn-success">
                Home
                </Link>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    required
                />
                </div>

                <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    required
                />
                </div>

                <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                    Gender
                </label>
                <input
                    type="text"
                    name="gender"
                    id="gender"
                    className="form-control"
                    onChange={(e) => setValues({ ...values, gender: e.target.value })}
                    required
                />
                </div>

                <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    className="form-control"
                    onChange={(e) => setValues({ ...values, age: e.target.value })}
                    required
                    min="1"
                />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Add Student
                </button>
            </form>
        </div> 
    </div>
  )
}

export default Create
