// components/MovieCard.jsx
import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie, onClick }) {
  return (
    <Card
      style={{
        width: "18rem",
        cursor: "pointer",
        borderColor: "black",
        borderStyle: "solid",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      onClick={() => onClick(movie.id)}
      className="mb-4"
    >
      <Card.Img
        variant="top"
        src={movie.image}
        alt={movie.title}
        className="movie-img"
      />
      <Card.Body className="text-center">
        <Card.Title style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.5rem",
          color: "#fff",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}>
          {movie.title}
        </Card.Title>
      </Card.Body>

      {/* Inline CSS for hover effect and dark background */}
      <style>{`
        .movie-img {
          transition: opacity 0.3s ease;
        }
        .movie-img:hover {
          opacity: 0.6;
        }
        .card {
          background-color: #000;
        }
      `}</style>
    </Card>
  );
}

export default MovieCard;

