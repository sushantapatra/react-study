import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const StudentEdit = () => {
    const { id } = useParams()
    let navigate = useNavigate();
    const [student, setStudent] = useState({})

    const url = `http://localhost/example/react/Api/get_students_id/${id}`
    const getStudentData = async (id) => {
        const studentsData = await axios.get(url);
        setStudent(studentsData.data.data)
    }
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setStudent((prevValue) => {
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

        const response = await axios.post('http://localhost/example/react/Api/update_student', JSON.stringify(student), { headers });
        if (response.status == 200) {
            return navigate("/student")
        }
    }

    useEffect(() => {
        getStudentData()
    }, [])



    return (
        <>
            <div className='row'>
                <div className="col-md-8">
                    <Link className="btn btn-info" to="/student">Student Lists</Link>
                    <form action="#" onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <input type="text" className="form-control" name="student_name" value={student.student_name} onChange={inputEvent} placeholder="Enter Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" name="student_email" value={student.student_email} onChange={inputEvent} placeholder="Enter Email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="tel" className="form-control" name="student_phone" value={student.student_phone} onChange={inputEvent} placeholder="Enter Phone" />
                        </div>
                        <input type="hidden" className="form-control" name="student_id" value={student.student_id} onChange={inputEvent} placeholder="Enter Name" />
                        <button className='btn btn-success'>Update</button>
                    </form>
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </>
    )
}

export default StudentEdit