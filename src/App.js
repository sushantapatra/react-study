import React, { useEffect, useState } from "react";
import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import Header from './components/Header.js';
import Home from './components/Home';
import Expenses from './components/Expenses';
import UseEffectHook from './components/UseEffectHook'
import UseParamsHook from './components/UseParamsHook'
import UseLocationHooks from './components/UseLocationHooks'
import UseRefHook from './components/UseRefHook'
import ApiCalling from './components/ApiCalling'

import StudentList from "./components/student/StudentList";
import StudentForm from "./components/student/StudentForm";
import StudentEdit from "./components/student/StudentEdit";
import ShortCircuitEvaluation from "./components/ShortCircuitEvaluation";
import UseReducerHook from "./components/UseReducerHook";
import UseContextHook from "./components/UseContextHook";
import ReactRedux from "./components/redux/ReactRedux";
function App() {

    let expenses = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2022, 8, 21)
        },
        {
            id: 'e2',
            title: 'Food',
            amount: 2,
            date: new Date(2022, 7, 22)
        },
        {
            id: 'e3',
            title: 'Home rend',
            amount: 25,
            date: new Date(2022, 4, 21)
        },
        {
            id: 'e4',
            title: 'Internent',
            amount: 15,
            date: new Date(2022, 5, 21)
        },
        {
            id: 'e5',
            title: 'Bike Repair',
            amount: 2,
            date: new Date(2022, 3, 21)
        }
    ]
    // useEffect(() => {
    //     fetch('https://api.sampleapis.com/codingresources/codingResources')
    //         .then(
    //             response => {
    //                 return response.json();
    //             }
    //         ).then(
    //             data => {
    //                 console.log(data);
    //             }
    //         );
    // }, []);
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col col-12 mx-auto'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="expenses" element={<Expenses item={expenses} />} />
                            <Route path="useeffect" element={<UseEffectHook />} />
                            <Route path="useparams/:fname/:lname" element={<UseParamsHook />} />
                            <Route path="uselocation" element={<UseLocationHooks />} />
                            <Route path="useref" element={<UseRefHook />} />
                            <Route path="usereducer" element={<UseReducerHook />} />
                            <Route path="usecontext" element={<UseContextHook />} />


                            <Route path="shortcoreva" element={<ShortCircuitEvaluation />} />

                            <Route path="student" element={<StudentList />} />
                            <Route path="studentadd" element={<StudentForm />} />
                            <Route path="studentedit/:id" element={<StudentEdit />} />


                            <Route path="api" element={<ApiCalling />} />
                            <Route path="redux" element={<ReactRedux />} />
                        </Routes>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;