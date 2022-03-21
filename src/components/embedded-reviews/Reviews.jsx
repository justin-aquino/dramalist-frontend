import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Reviews = ({drama}) => {
const [reviews, setReviews] = useState([])
const [reviewForm, setReviewForm] = useState({})

const { id } = useParams()
// console.log(id)

useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/dramas/${id}`)
        .then(response => {
            setReviews(response.data.reviews)
        })
}, [reviews])

// console.log(drama)
const submitComment = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_SERVER_URL}/dramas/${id}/reviews`, reviewForm)
        .then(response => {
            // console.log(response.data)
            setReviews([...reviews, reviewForm])
            setReviewForm({
                header: "",
                content: ""
            })
        })
}

const deleteReview = (rev) => {
    axios.delete(`${process.env.REACT}/reviews/${rev._id}`)
        .then(response => {
            console.log(response.data)
            return setReviews(reviews)
        })
        .catch(console.log)
}

const allReviews = reviews.map((review, idx) => {
    return(
        <section key={idx}>
            <button onClick={() => {deleteReview(review)}}>Delete</button>
            <button>Edit</button>
            <h3>{review.header}</h3>
            <p>{review.content}</p>
        </section>
    )
})
  return (
      <section>
            <div>{allReviews}</div>

        <form onSubmit={submitComment}>
            <label htmlFor="header">Header: </label>
            <input 
                type="text" 
                id="header"
                onChange={(e)=> {setReviewForm({...reviewForm, header: e.target.value})}} 
            />
            <label htmlFor="content">Content: </label>
            <input 
                type="text" 
                id="content" 
                onChange={(e)=> {setReviewForm({...reviewForm, content: e.target.value})}} 
            />
            <button type="submit">Submit Comment</button>
        </form>
      </section>
  )
}

export default Reviews