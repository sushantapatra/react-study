import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([])


    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = async () => {
        const studentsData = await axios.get('http://localhost/example/react/Api/get_students');
        setStudents(studentsData.data.data)
        //console.log(studentsData.data.data);
    }

    const addStudent = () => {
        window.location.href = 'studentadd'
    }


    return (
        <>
            <div className='row'>
                <div className="col-md-8">
                    <button className='btn btn-info' onClick={addStudent}>Add Student</button>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((val, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{val.student_name}</td>
                                                <td>{val.student_email}</td>
                                                <td>{val.student_phone}</td>
                                                <td>
                                                    <Link className="btn btn-success btn-sm mx-2" to={`/studentedit/${val.student_id}`}>Edit</Link>
                                                    <Link className="btn btn-warning btn-sm" to="/useeffect">Delete</Link>
                                                </td>
                                            </tr>
                                        )

                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-md-4">

                </div>
            </div>

        </>
    )
}

export default StudentList