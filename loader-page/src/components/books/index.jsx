import React from "react";
import { useState, useEffect } from "react";
import Cards from "../cards";
import "./index.css";

const BooksCards = () => {
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFromBooks, setDataFromBooks] = useState({});

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
        setDataFromBooks(json);
        console.log(json.reading_log_entries);
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
      {!loading && (
        <div className="cards-container">
          {dataFromBooks.reading_log_entries.map((book, index) => (
            <Cards
              key={index}
              date={book.work.first_publish_year
              }
              title={book.work.title}
              author={
                book.work.author_names 
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BooksCards;
