import React from "react";
import './styles.css';
import PropTypes from "prop-types";

import mock_data from "../../../MockData/Data";

const JayLimBoards = props => {
  console.log(mock_data[2]);
  return (
    <div>
      <div>
      <h1 className='header1'>This is Jay Boards</h1>
      <h1 className='header2'>heading2</h1>
      <h1 className='header3'>heading3</h1>
      <h1 className='header4'>heading4</h1>
      <p> jaes hompi</p>
      <p>
        <strong>Title</strong> : {mock_data[0].title}
        <br />
        <strong>Content</strong> : {mock_data[0].content}
        <br />
        <strong>Author</strong> :{" "}
        {mock_data[0].author.firstName + " " + mock_data[0].author.lastName}
      </p>
      </div>
      <div>
        <p className='title'>Title: {mock_data[0].title}</p>
        <p>Content: {mock_data[0].content}</p>
        <p>First Name: {mock_data[0].author.firstName}</p>
        <p>Last Name: {mock_data[0].author.lastName}</p>
      </div>
    </div>
  );
};

JayLimBoards.propTypes = {};

export default JayLimBoards;
