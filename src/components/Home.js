import React, { useEffect, useState } from 'react'

import CreateNote from './CreateNote'
import Note from './Note'

const Home = () => {
	const [date, setDate] = useState(new Date())
	const [addItem, setAddItem] = useState([])

	//notes show here
	const addNote = (note) => {
		setAddItem((prevValue) => {
			return [...prevValue, note]
		})

	}
	const onDeleteItem = (id) => {
		setAddItem(
			(oldData) => oldData.filter((curData, index) => {
				return index != id
			})
		)
	}

	//date time timer
	function refreshClock() {
		setDate(new Date())
	}
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000)
		return function cleanup() {
			clearInterval(timerId)
		}
	}, [])



	return (
		<div className='container'>
			<div className='row'>
				<div className='col col-12'>
					<h1 >{date.toDateString()} - {date.toLocaleTimeString()}</h1>
					<hr />
				</div>

				<CreateNote passNote={addNote} />

				<div className='col col-12 mx-auto my-4'>
					<div className='row'>
						{
							addItem.map((val, index) => {
								return <Note key={index} id={index} title={val.title} content={val.content} deleteItem={onDeleteItem} />
							})
						}
					</div>
				</div>


			</div>
		</div>
	)
}

export default Home