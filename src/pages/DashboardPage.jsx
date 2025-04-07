// pages/DashboardPage.jsx
import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MovieList from "../components/Movielist";
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
    image: "/cinderella.jpg",
  },
  {
    id: 6,
    title: "Finding Nemo",
    duration: "1h 40m",
    description:
      "After his son Nemo is captured by a diver and taken to a fish tank in a dentist’s office, Marlin, a timid clownfish, sets out on a daring journey across the ocean to rescue him. Along the way, he is joined by Dory, a forgetful but optimistic blue tang. Together, they face countless underwater challenges, meet a colorful cast of characters, and discover the power of love, bravery, and friendship.",
    casts:
      "Albert Brooks as Marlin, Ellen DeGeneres as Dory, Alexander Gould as Nemo, Willem Dafoe as Gill, Brad Garrett as Bloat, Allison Janney as Peach, Austin Pendleton as Gurgle",
    image: "/nemo.jfif",
  },
  {
    id: 2,
    title: "Tangled",
    duration: "1h 40m",
    description:
      "Rapunzel, a spirited and curious teenager with 70 feet of magical golden hair, has spent her entire life locked away in a tower. When a charming bandit named Flynn Rider stumbles upon her, she seizes the opportunity to explore the outside world for the first time. Together, they embark on a thrilling adventure filled with danger, self-discovery, and a journey to find her true identity.",
    casts:
      "Mandy Moore as Rapunzel, Zachary Levi as Flynn Rider, Donna Murphy as Mother Gothel, Ron Perlman as Stabbington Brother, M.C. Gainey as Captain of the Guard, Jeffrey Tambor as Big Nose Thug, Brad Garrett as Hook Hand Thug",
    image: "/tangled.jfif",
  },
];

function DashboardPage() {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <>
      <AppNavbar />
      <div
        style={{
          background: "linear-gradient(to bottom, black, red)",
          minHeight: "100vh",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Container>
          <h2 className="mb-4 text-white">Movie List</h2>
          <MovieList movies={movies} onCardClick={handleMovieClick} />
        </Container>
      </div>
    </>
  );
}

export default DashboardPage;
