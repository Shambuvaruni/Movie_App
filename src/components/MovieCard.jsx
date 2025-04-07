// components/MovieCard.jsx
import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie, onClick }) {
  return (
    <Card
      style={{ width: "18rem", cursor: "pointer", borderColor: "black", borderStyle: "solid"}}
      onClick={() => onClick(movie.id)}
      className="mb-4"
    >
      <Card.Img
        variant="top"
        src={movie.image}
        alt={movie.title}
        className="movie-img"
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>

      {/* Inline CSS for hover effect */}
      <style>{`
        .movie-img {
          transition: opacity 0.3s ease;
        }
        .movie-img:hover {
          opacity: 0.6;
        }
      `}</style>
    </Card>
  );
}

export default MovieCard;
