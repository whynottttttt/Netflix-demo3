import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./MovieCard.style.css"

const MovieCard = ({ movie, type = 'popular' }) => {
    return (
        <div
            style={{
                backgroundImage: "url(" +
                    `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ")",
            }}
            className={`movie-card ${type}-card`}
        >
            <div className={`overlay ${type}-overlay`}>
                <h1>{movie.title}</h1>
                <div>
                    {movie.genre_ids.map((id) => (
                        <Badge key={id} bg={type === 'upcoming' ? 'primary' : 'danger'}>{id}</Badge>
                    ))}
                </div>
                <div className="movie-info">
                    <div className="vote">{movie.vote_average}</div>
                    {movie.adult && <div className="adult-tag">18+</div>}
                    {type === 'upcoming' && movie.release_date && (
                        <div className="release-date">개봉: {movie.release_date}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieCard