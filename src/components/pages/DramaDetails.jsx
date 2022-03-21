import Reviews from "../embedded-reviews/Reviews"
import { Link } from "react-router-dom"

const DramaDetails = ({drama, deleteDrama}) => {

  return (
    <div>
        <h2>{drama.title}</h2>
        <small>Number of Episodes: {drama.episodes}</small>
        <p>
            {drama.synopsis}
        </p>
        <Link to="/dramas">
            <button onClick={() => {deleteDrama(drama)}}>Delete this Drama</button>
        </Link>
        <Reviews drama={drama} />
    </div>
  )
}

export default DramaDetails