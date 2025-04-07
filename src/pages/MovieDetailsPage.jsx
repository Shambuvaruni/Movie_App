import React from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import AppNavbar from "../components/Navbar";

const movies = [
  {
    id: 1,
    title: "Cinderella",
    duration: "1h 45m",
    description:
      "After her father's death, young Ella finds herself at the mercy of her cruel stepmother and stepsisters. Never one to give up hope, Ella's fortunes begin to change after a chance encounter with a dashing stranger in the woods. With the help of her Fairy Godmother, Ella is transformed for one magical night, where kindness and courage lead her to her true destiny.",
    casts:
      "Lily James as Cinderella, Cate Blanchett as Lady Tremaine, Richard Madden as Prince Kit, Helena Bonham Carter as Fairy Godmother, Stellan Skarsgård as Grand Duke, Holliday Grainger as Anastasia, Sophie McShera as Drisella",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg",
  },
  {
    id: 6,
    title: "Finding Nemo",
    duration: "1h 40m",
    description:
      "After his son Nemo is captured by a diver and taken to a fish tank in a dentist’s office, Marlin, a timid clownfish, sets out on a daring journey across the ocean to rescue him. Along the way, he is joined by Dory, a forgetful but optimistic blue tang. Together, they face countless underwater challenges, meet a colorful cast of characters, and discover the power of love, bravery, and friendship.",
    casts:
      "Albert Brooks as Marlin, Ellen DeGeneres as Dory, Alexander Gould as Nemo, Willem Dafoe as Gill, Brad Garrett as Bloat, Allison Janney as Peach, Austin Pendleton as Gurgle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFM4OnvEhI_VPheRXVv5fU56qUtaof5Rtrw&s",
  },
  {
    id: 2,
    title: "Tangled",
    duration: "1h 40m",
    description:
      "Rapunzel, a spirited and curious teenager with 70 feet of magical golden hair, has spent her entire life locked away in a tower. When a charming bandit named Flynn Rider stumbles upon her, she seizes the opportunity to explore the outside world for the first time. Together, they embark on a thrilling adventure filled with danger, self-discovery, and a journey to find her true identity.",
    casts:
      "Mandy Moore as Rapunzel, Zachary Levi as Flynn Rider, Donna Murphy as Mother Gothel, Ron Perlman as Stabbington Brother, M.C. Gainey as Captain of the Guard, Jeffrey Tambor as Big Nose Thug, Brad Garrett as Hook Hand Thug",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8033989_p_v8_aq.jpg",
  },
];

function MovieDetailsPage() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <>
      <AppNavbar />

      <Container
        fluid
        className="py-5"
        style={{
          background: "linear-gradient(to bottom, black, red)",
          minHeight: "100vh",
        }}
      >
        <Container>
          <Card
            className="p-4 shadow"
            style={{
              marginTop:"5%",
              background: "linear-gradient(to top, black, grey)",
              color: "white",
              border: "none",
            }}
          >
            <Row>
              <Col
                md={5}
                className="d-flex align-items-center justify-content-center mb-3 mb-md-0"
              >
                <Card.Img
                  src={movie.image}
                  alt={movie.title}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <Card.Title as="h2">{movie.title}</Card.Title>
                  <Card.Text>
                    <strong>Duration:</strong> {movie.duration}
                  </Card.Text>
                  <Card.Text>
                    <strong>Description:</strong> {movie.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Casts:</strong> {movie.casts}
                  </Card.Text>

                  <Button
                    variant="light"
                    className="mt-3"
                    onClick={() => alert("Movie is now playing... 🎬")}
                  >
                    ▶ Play Movie
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default MovieDetailsPage;
