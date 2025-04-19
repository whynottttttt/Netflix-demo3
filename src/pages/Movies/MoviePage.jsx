import React from 'react'
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap'
import './MoviePage.style.css'
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies'

export const MoviePage = () => {
  const { data, isLoading, error } = usePopularMoviesQuery();
  const movies = data?.data?.results || [];

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="movie-page">
        <Container>
          <div className="alert alert-danger">
            영화 데이터를 불러오는데 오류가 발생했습니다: {error.message}
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="movie-page">
      <Container>
        <h2 className="page-title">인기 영화</h2>
        <Row>
          {movies.map(movie => (
            <Col key={movie.id} xs={6} md={4} lg={3} className="mb-4">
              <Card className="movie-card">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
