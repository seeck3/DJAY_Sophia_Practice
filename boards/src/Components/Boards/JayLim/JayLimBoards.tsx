import React from 'react';
import PropTypes from 'prop-types';

import mock_data from '../../../MockData/Data';
// @ts-ignore
const JayLimBoards = (props) => {
  console.log('this is fake data', mock_data);
  return (
    <div>
      <h1>This is Jay Boards</h1>
      <p>게시판 여기다가 만드십시오</p>
      <p>
        <strong>Title</strong> : {mock_data[0].title}
        <br />
        <strong>Content</strong> : {mock_data[0].content}
        <br />
        <strong>Author</strong> :{' '}
        {mock_data[0].author.firstName + ' ' + mock_data[0].author.lastName}
      </p>
    </div>
  );
};

JayLimBoards.propTypes = {};

export default JayLimBoards;
