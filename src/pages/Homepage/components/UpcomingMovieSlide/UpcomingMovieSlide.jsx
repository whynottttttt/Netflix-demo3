import React from 'react'
import { UpcomingMoviesQuery } from '../../../../hooks/useUpcomingMovies'
import { Alert } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import "./UpcomingMovieSlide.style.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
}

const UpcomingMovieSlide = () => {

    const { data, isLoading, isError, error } = UpcomingMoviesQuery()

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
    return (
        <div>
            <h3>Upcoming Movies</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass="upcoming-movie-slider p-1"
                containerClass="upcoming-carousel-container"
                responsive={responsive}
            >
                {data.results.map((movie, index) => <MovieCard movie={movie} key={index} type="upcoming" />)}
            </Carousel>
        </div>
    )
}

export default UpcomingMovieSlide