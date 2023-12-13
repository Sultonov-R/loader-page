import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Loader from "./components/loader";
import BooksCards from "./components/books";
import Cards from "./components/cards";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    data();
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <h1 className="welcome-text">Welcome this application</h1>
      )}
      {<BooksCards />}
      <Cards />
    </>
  );
}

export default App;
