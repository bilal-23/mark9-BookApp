import { useState } from "react";
import Footer from "./components/Footer";
import "./styles.css";

const genres = {
  "Science Fiction": [
    {
      name: "Dune",
      author: "Frank Herbert",
      // image: "https://ik.imagekit.io/ns2swkphi/default-image.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1655383872257"
    },
    {
      name: "Ender's Game (Ender's Saga)",
      author: "Orson Scott Card",
      image: "Ender'sGame.jpg"
    },
    {
      name: "1984",
      author: "George Orwell",
      image: "1984.jpeg"
    },
    {
      name: "Fahrenheit 451",
      author: "Ray Bradbury",
      image: "Fahrenheit451.jpg"
    }
  ],
  Fiction: [
    {
      name: "Harry Potter and the Order of the Phoenix",
      author: "J.K. Rowling"
    },
    {
      name: "Pride and Prejudice",
      author: "Jane Austen"
    },
    {
      name: "To Kill a Mockingbird",
      author: "Harper Lee"
    },
    {
      name: "The Book Thief",
      author: "Markus Zusak"
    }
  ],
  "Self Help": [
    {
      name: "Gmorning, Gnight!",
      author: "in-Manuel Miranda"
    },
    {
      name: "Girl Wash Your Face",
      author: "Rachel Hollis"
    },
    {
      name: "You Are a Badass",
      author: "Jen Sincero"
    },
    {
      name: "Radical Acceptance",
      author: "Tara Brach"
    }
  ],
  Fantasy: [
    {
      name: "	A Game of Thrones",
      author: "George R.R. Martin"
    },
    {
      name: "The Name of the Wind",
      author: "Patrick Rothfuss"
    },
    {
      name: "His Dark Materials",
      author: "Philip Pullman"
    }
  ]
};

export default function App() {
  const [curGenre, setCurGenre] = useState("Science Fiction");

  function genreChangeHandler(genre) {
    setCurGenre(genre);
  }

  return (
    <>
      <div className="App">
        <header className="header">
          <h1 className="heading">
            <span>📚</span> Books App
          </h1>
          <p className="normal-text text-center">
            Checkout my favorite books. Select a genre to get started
          </p>
        </header>
        <ul className="genre-container">
          {Object.keys(genres).map((genre, index) => {
            return (
              <li
                onClick={genreChangeHandler.bind(this, genre)}
                className={`genre ${curGenre === genre ? "active" : "inactive"
                  }`}
                key={index}
              >
                {genre}
              </li>
            );
          })}
        </ul>
        <ul className="books-list-container">
          {genres[curGenre].map((item, index) => {
            return (
              <>
                <li className="book-card">
                  {/* <image src={item.im} alt={item.name} className="image" /> */}
                  <p className="name">{item.name}</p>
                  <p className="author">by {item.author}</p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
