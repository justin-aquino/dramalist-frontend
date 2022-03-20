import axios from 'axios';
import React from 'react'
import { useState } from "react";

const EditForm = ({drama, showForm, setShowForm}) => {
    const [editForm, setEditForm] = useState(drama)
    
    const submitForm = (e) => {
        e.preventDefault()
        axios.put(`${process.env.REACT_APP_SERVER_URL}/dramas/${drama._id}`, editForm)
            .then(response => {
                console.log(response.drama)
                setShowForm(!showForm)
            })
    }

  return (
    <div>
        <h1>Edit Drama: {drama.title} </h1>
        <form onSubmit={submitForm}>
            <label htmlFor="title">Title: </label>
            <input 
                type="text" 
                id="title" 
                value={editForm.title} 
                onChange={(e) => {setEditForm({...editForm, title: e.target.value})}}
            />
            <label htmlFor="episodes">Number of Episodes: </label>
            <input 
                type="text" 
                id="episodes" 
                value={editForm.episodes} 
                onChange={(e) => {setEditForm({...editForm, episodes: e.target.value})}}
            />
            <label htmlFor="synopsis">Synopsis: </label>
            <textarea 
                type="text" 
                id="synopsis" 
                value={editForm.synopsis} 
                onChange={(e) => {setEditForm({...editForm, synopsis: e.target.value})}}
            />
            {/* <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" value={drama.title} /> */}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default EditForm