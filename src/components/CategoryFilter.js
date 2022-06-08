import React from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleChange = event => {
    const { handleFilter } = this.props;
    handleFilter({ filter: event.target.value });
  }

  render() {
    const bookCategories = ['ALL', 'Action', 'Biography', 'Drama', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

    return (
      <div className="Category-selector">
        <span className="author">Category Select</span>
        <select onChange={this.handleChange}>
          {bookCategories.map((p, i) => (
            <option key={i}>{p}</option> /* eslint-disable-line */
          ))}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
