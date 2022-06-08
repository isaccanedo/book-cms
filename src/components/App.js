import React from 'react';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
