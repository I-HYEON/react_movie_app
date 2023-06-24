import PropTypes from 'prop-types'

function Movie({coverImg, title, summary, genres}) {  //프롭스를 받아와야한다.
    return (
        <div>
            <img src={coverImg} alt="영화이미지" />
            <h2>{title}</h2>
            <h3>{summary}</h3>
            <h4>{genres}</h4>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie