import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSubmit, onChange }) => (
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={search} onChange={onChange} />
      <button>SCRAPE</button>
    </form>
  </div>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
