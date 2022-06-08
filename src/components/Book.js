import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id,
  title,
  category,
  handleBookRemove,
}) => (
  <div className="Book-container">
    <div className="Book-list">
      <div className="category">{category}</div>
      <div className="title">{title}</div>
      <div className="author">{id}</div>
      <div><button onClick={() => handleBookRemove(id)} type="button" className="remove">Remove</button></div>
    </div>
  </div>
);

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleBookRemove: PropTypes.func.isRequired,
};

export default Book;
