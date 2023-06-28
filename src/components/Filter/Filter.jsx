// import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({ onFilterData, onFilterContact }) => {
  return (
    <>
      <label>
        <input type="text" value={onFilterData} onChange={onFilterContact} />
      </label>
    </>
  );
};

export default Filter;
