const DramaDetails = ({drama}) => {

  return (
    <div>
        <h2>{drama.title}</h2>
        <small>Number of Episodes: {drama.episodes}</small>
        <p>
            {drama.synopsis}
        </p>
    </div>
  )
}

export default DramaDetails