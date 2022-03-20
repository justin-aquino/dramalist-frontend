import { Link } from "react-router-dom"

const Dramas = ({dramas}) => {
    const allDramas = dramas.map((drama, idx) => {
        return(
          <div key={idx}>
            <Link to={`/dramas/${drama._id}` }>
                <h5>{drama.title}</h5>
            </Link>
          </div>
        )
    })
  return (
    <div>{allDramas}</div>
  )
}

export default Dramas