// components/MovieList.jsx
// components/MovieList.jsx
import React from "react";
import { Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

function MovieList({ movies, onCardClick }) {
  return (
    <Row>
      {movies.map((movie) => (
        <Col key={movie.id} sm={12} md={6} lg={4}>
          <MovieCard movie={movie} onClick={onCardClick} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
