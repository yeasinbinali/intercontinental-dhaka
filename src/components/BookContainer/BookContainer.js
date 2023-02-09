import React from "react";
import { Link } from "react-router-dom";
import "./BookContainer.css";

const BookContainer = (props) => {
  const book = props.book;
  return (
    <div className="single-book">
      <img src={book.img} alt=""></img>
      <div className='book-description'>
        <h3>{book.name}</h3>
        <p>{book.description}</p>
        <div className='btn-section'>
          <p>
            <small>Per Night: ${book.perNight}</small>
          </p>
          <Link to='/singleBook'>Book Now</Link>
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
