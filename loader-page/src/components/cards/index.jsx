import React from "react";
import './index.css';
import BooksCards from "../books";


const Cards = ({title, author, date})=>{
    return (
        <>
        <div className="cards">
            <div className="card-img">
                <img src="https://images.penguinrandomhouse.com/cover/9780143127048" alt="img" />
            </div>

            <div className="card-book-info">
                <h1 className="title">{title}</h1>
                <h2 className="author-name">{author}</h2>
                <span className="book-date">{date}</span>
            </div>
        </div>
        </>
    )
}

export default Cards;