import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { removeBook, changeFilter } from '../actions';

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleBookRemove = (book) => {
    const { removeBook } = this.props;
    removeBook(book);
  }

  handleFilter = (filter) => {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  render() {
    const { items: { books, filter } } = this.props;
    return (
      <div>
        <CategoryFilter handleFilter={this.handleFilter} />
        <div>
          {books
            .filter(el => (filter === 'ALL' ? el : el.category === filter))
            .map(e => (
              <Book
                id={e.id}
                title={e.title}
                category={e.category}
                key={e.id}
                handleBookRemove={this.handleBookRemove}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ items: state });

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => dispatch(changeFilter(filter)),
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
