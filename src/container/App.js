import React from 'react';
import BooksList from './BooksList';
import BooksForm from './BooksForm';

function App(store) {
  return (
    <div className="App">
      <BooksList store={store} />
      <BooksForm />
    </div>
  );
}

export default App;
