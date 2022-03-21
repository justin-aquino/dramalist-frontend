import { useState } from 'react'
import axios from "axios"
import { Link, redirect } from 'react-router-dom'

const AddForm = ({dramas, setDramas}) => {
    const [ addForm, setAddForm ] = useState({})
    

    const submitForm = () => {
    
        axios.post(`${process.env.REACT_APP_SERVER_URL}/dramas`, addForm)
            .then(response => {
                console.log(response.data)
                setDramas([...dramas, addForm])
            })
            .catch(console.log)
        console.log(addForm)
    }
  return (
    <div>
        <h1>Forms Page</h1>
        {/* <form onSubmit={submitForm}> */}
            <label htmlFor="title">Title: </label>
            <input 
                type="text" 
                id="title"
                value={addForm.title}
                onChange={(e) => {setAddForm({...addForm, title: e.target.value})}}
            />
            <label htmlFor="synopsis">Synopsis:  </label>
            <input 
                type="text" 
                id="synopsis"  
                value={addForm.synopsis}
                onChange={(e) => {setAddForm({...addForm, synopsis: e.target.value})}}
            />
            <label htmlFor="episodes">Number of Episodes: </label>
            <input 
                type="number" 
                id="episodes"  
                value={addForm.episodes}
                onChange={(e) => {setAddForm({...addForm, episodes: e.target.value})}}
            />
            <Link to="/dramas">
                <button type="submit" onClick={submitForm}>Add New Drama</button>
            </Link>
        {/* </form> */}
    </div>
  )
}

export default AddForm