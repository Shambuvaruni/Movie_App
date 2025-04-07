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
    image: "https://lumiere-a.akamaihd.net/v1/images/p_cinderella_20490_a7c83808.jpeg",
  },
  {
    id: 2,
    title: "Finding Nemo",
    duration: "1h 40m",
    description:
      "After his son Nemo is captured by a diver and taken to a fish tank in a dentist’s office, Marlin, a timid clownfish, sets out on a daring journey across the ocean to rescue him. Along the way, he is joined by Dory, a forgetful but optimistic blue tang. Together, they face countless underwater challenges, meet a colorful cast of characters, and discover the power of love, bravery, and friendship.",
    casts:
      "Albert Brooks as Marlin, Ellen DeGeneres as Dory, Alexander Gould as Nemo, Willem Dafoe as Gill, Brad Garrett as Bloat, Allison Janney as Peach, Austin Pendleton as Gurgle",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810",
  },
  {
    id: 3,
    title: "Tangled",
    duration: "1h 40m",
    description:
      "Rapunzel, a spirited and curious teenager with 70 feet of magical golden hair, has spent her entire life locked away in a tower. When a charming bandit named Flynn Rider stumbles upon her, she seizes the opportunity to explore the outside world for the first time. Together, they embark on a thrilling adventure filled with danger, self-discovery, and a journey to find her true identity.",
    casts:
      "Mandy Moore as Rapunzel, Zachary Levi as Flynn Rider, Donna Murphy as Mother Gothel, Ron Perlman as Stabbington Brother, M.C. Gainey as Captain of the Guard, Jeffrey Tambor as Big Nose Thug, Brad Garrett as Hook Hand Thug",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8033989_p_v8_aq.jpg",
  },
  {
    id: 4,
    title: "The Little Mermaid",
    duration: "2h 15m",
    description:
      "A spirited young mermaid named Ariel longs to experience life on land. After rescuing a human prince from a shipwreck, she makes a daring deal with the sea witch Ursula to trade her voice for legs. As Ariel navigates life above the sea, she must earn the prince’s love and stop Ursula’s evil plans to reclaim her true identity and save both their worlds.",
    casts:
      "Halle Bailey as Ariel, Jonah Hauer-King as Prince Eric, Melissa McCarthy as Ursula, Javier Bardem as King Triton, Awkwafina as Scuttle, Jacob Tremblay as Flounder, Daveed Diggs as Sebastian",
    image: "https://assets.gadgets360cdn.com/pricee/assets/product/202305/the_little_mermaid_2_1684824968.jpg"
  },
  {
    id: 5,
    title: "Maleficent",
    duration: "1h 37m",
    description:
      "Once a powerful and kind-hearted fairy, Maleficent is betrayed by the man she loves and turns her heart to stone. Driven by revenge, she curses the newborn daughter of the human king. As the child grows, Maleficent discovers that Aurora may be the key to restoring peace and perhaps even her own happiness.",
    casts:
      "Angelina Jolie as Maleficent, Elle Fanning as Aurora, Sharlto Copley as King Stefan, Sam Riley as Diaval, Imelda Staunton as Knotgrass, Juno Temple as Thistlewit, Lesley Manville as Flittle",
    image: "https://m.media-amazon.com/images/I/71Irhsm-pOL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 6,
    title: "Wish",
    duration: "1h 35m",
    description:
      "In the magical kingdom of Rosas, a sharp-witted idealist named Asha makes a heartfelt plea to the stars when she senses a darkness no one else does. Her wish is answered by a cosmic force—a little ball of boundless energy named Star. Together, they confront the most formidable of foes to prove that when one brave human connects with the magic of the stars, wondrous things can happen.",
    casts:
      "Ariana DeBose as Asha, Chris Pine as King Magnifico, Alan Tudyk as Valentino, Angelique Cabral as Queen Amaya, Victor Garber as Sabino, Natasha Rothwell as Sakina",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_disney_wish_2993_f80fee96.jpeg"
  },
  {
    id: 7,
    title: "Pocahontas",
    duration: "1h 21m",
    description:
      "Pocahontas, the spirited daughter of a Native American chief, longs to explore the world beyond her village. When English settlers arrive, she forms a bond with Captain John Smith, bridging the gap between two cultures. As tensions rise between the settlers and her people, Pocahontas must follow her heart to choose peace, understanding, and the path of nature and love.",
    casts:
      "Irene Bedard as Pocahontas (voice), Mel Gibson as John Smith (voice), David Ogden Stiers as Governor Ratcliffe (voice), John Kassir as Meeko (voice), Russell Means as Chief Powhatan (voice), Christian Bale as Thomas (voice)",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_pocahontas_19873_d84f7162.jpeg"
  },
  {
    id: 8,
    title: "Raya and the Last Dragon",
    duration: "1h 54m",
    description:
      "In the fantasy world of Kumandra, long ago humans and dragons lived together in harmony. But when sinister monsters known as the Druun threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, those same monsters have returned, and it's up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and unite its divided people.",
    casts:
      "Kelly Marie Tran as Raya, Awkwafina as Sisu, Izaac Wang as Boun, Gemma Chan as Namaari, Daniel Dae Kim as Benja, Benedict Wong as Tong, Sandra Oh as Virana",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_rayaandthelastdragon_21294_83346778.jpeg?region=0%2C0%2C540%2C810"
  },
  {
    id: 9,
    title: "Peter Pan & Wendy",
    duration: "1h 46m",
    description:
      "Wendy Darling, a young girl afraid to leave her childhood home, meets Peter Pan, a boy who refuses to grow up. Along with her brothers and the tiny fairy Tinker Bell, she travels with Peter to the magical world of Neverland. There, she encounters an evil pirate captain, Captain Hook, and embarks on a thrilling and dangerous adventure that will change her life forever.",
    casts:
      "Alexander Molony as Peter Pan, Ever Anderson as Wendy Darling, Jude Law as Captain Hook, Yara Shahidi as Tinker Bell, Jim Gaffigan as Mr. Smee, Molly Parker as Mary Darling, Alan Tudyk as George Darling",
    image: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_peterpanandwendy_poster_rebrand_7a88a920.jpeg?region=0%2C0%2C540%2C810"
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
          background: "linear-gradient(to bottom, black, rgb(200, 0, 93))",
          minHeight: "100vh",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <Container>
          <h2
            className="text-white"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2.5rem",
              letterSpacing: "1px",
              marginBottom: "1.5rem",
            }}
          >
            You May Like
          </h2>
          <MovieList movies={movies} onCardClick={handleMovieClick} />
        </Container>
      </div>
    </>
  );
}

export default DashboardPage;
