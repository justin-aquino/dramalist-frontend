import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import EditForm from './EditForm'
import DramaDetails from "./DramaDetails"

const Drama = () => {
    const [drama, setDrama] = useState({})
    const [showForm, setShowForm] = useState(false)
    // const [isDeleted, setIsDeleted] = useState(false)

    const { id } = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/dramas/${id}`)
            .then(response => {
                setDrama(response.data)
            })
            .catch(console.log)
    }, [showForm, id])

    const deleteDrama = (dramaToDelete) => {
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/dramas/${dramaToDelete._id}`)
            .then(response => {
                console.log(response.data)
            })
            .catch(console.log)
    }

  return (
    <div>
        {
            showForm ? <EditForm
                            drama={drama}
                            setShowForm={setShowForm}
                            showForm={showForm}
                        /> : <DramaDetails 
                                drama={drama}
                                deleteDrama={deleteDrama}
                            />
        }
        <button onClick={() => {setShowForm(!showForm)}}>
            { showForm ? "exit" : "edit this drama"}
        </button>
      
    </div>
  )
}

export default Drama