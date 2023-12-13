import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

const BooksCards = () => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFromBooks, setDataFromBooks] = useState({});

  function handleClick() {
    console.log(dataFromBooks);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/people/mekBot/books/currently-reading.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        console.log(json);
        setDataFromBooks(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && !error && (
        <div className="cards-container">
          {dataFromBooks.map((book) => (
            <Card
              date={book.work.date}
              title={book.work.title}
              author={book.work.author_name ? book.work.author_name[0] : "Unknown"}
            />
          ))}
          console.log(book);
        </div>
      )}
    </>
  );
};

export default BooksCards;
