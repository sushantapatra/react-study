import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const StudentForm = () => {
    const [students, setStudents] = useState({
        student_name: "",
        student_email: "",
        student_phone: ""
    })

    const inputEvent = (event) => {
        const { name, value } = event.target;
        setStudents((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }
    const formSubmit = async (e) => {
        e.preventDefault()

        const headers = {
            'Content-type': 'multipart/form-data'
        };

        const response = await axios.post('http://localhost/example/react/Api/add_student', JSON.stringify(students), { headers });
        if (response.status == 200) {
            setStudents({
                student_name: "",
                student_email: "",
                student_phone: ""
            });
            alert('Student Added Successfully');
        }
    }
    const StudentList = () => {
        window.location.href = 'student'
    }

    return (
        <>
            <div className='row'>
                <div className="col-md-8">
                    <button className='btn btn-info' onClick={StudentList}>Students List</button>
                    <form action="#" onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" name="student_name" value={students.student_name} onChange={inputEvent} placeholder="Enter Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" name="student_email" value={students.student_email} onChange={inputEvent} placeholder="Enter Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="tel" className="form-control" name="student_phone" value={students.student_phone} onChange={inputEvent} placeholder="Enter Phone" />
                        </div>
                        <button className='btn btn-success'>Add</button>
                    </form>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </>
    )
}

export default StudentForm