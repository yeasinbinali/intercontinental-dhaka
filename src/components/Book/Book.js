import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import BookContainer from '../BookContainer/BookContainer';
import './Book.css';

const Book = () => {
    const books = useLoaderData();
    return (
        <Container className='book'>
            {
                books.map(book => <BookContainer book = {book} key = {book.id}></BookContainer>)
            }
        </Container>
    );
};

export default Book;