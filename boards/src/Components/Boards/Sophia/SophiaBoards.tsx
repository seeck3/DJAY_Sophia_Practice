import React from 'react';
import PropTypes from 'prop-types';

import mock_data from '../../../MockData/Data';
// @ts-ignore
const SophiaBoards = (props) => {
  console.log('this is fake data', mock_data);
  return (
    <div>
      <h1>This Is Sophia Boards</h1>
      <p>Make your boards here</p>
      <p>
        <strong>Title</strong> : {mock_data[2].title}
        <br />
        <strong>Content</strong> : {mock_data[2].content}
        <br />
        <strong>Author</strong> :{' '}
        {mock_data[2].author.firstName + ' ' + mock_data[2].author.lastName}
      </p>
    </div>
  );
};

SophiaBoards.propTypes = {};

export default SophiaBoards;
