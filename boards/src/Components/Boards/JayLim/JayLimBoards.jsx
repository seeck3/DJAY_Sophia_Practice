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
        <p className='Content'>Content: {mock_data[0].content}</p>
        <p className='firstName'>First Name: {mock_data[0].author.firstName}</p>
        <p className='lastName'>Last Name: {mock_data[0].author.lastName}</p>
        <p className='title'>Title:{mock_data[1].title}</p>
        <p className='Content'>content:{mock_data[1].content}</p>
        <p className='firstName'>First Name:{mock_data[1].author.firstName}</p>
        <p className='lastName'>Last Name:{mock_data[1].author.lastName}</p>
        <p className='title'>Title:{mock_data[2].title}</p>
        <p className='Content'>content:{mock_data[2].content}</p>
        <p className='firstName'>First Name:{mock_data[2].author.firstName}</p>
        <p className='lastName'>Last Name:{mock_data[2].author.lastName}</p>
        <p className='title'>Title:{mock_data[3].title}</p>
        <p className='Content'>Content:{mock_data[3].content}</p>
        <p className='firstName'>First Name:{mock_data[3].author.firstName}</p>
        <p className='lastName'>Last Name:{mock_data[3].author.lastName}</p>
        <p className='title'>Title:{mock_data[4].title}</p>
        <p className='Content'>Content:{mock_data[4].content}</p>
        <p className='firstName'>First Name:{mock_data[4].author.firstName}</p>
        <p className='lastName'>Last Name:{mock_data[4].author.lastName}</p>
        <p className='title'>Title:{mock_data[5].title}</p>
        <p className='Content'>content:{mock_data[5].content}</p>
        <p className='firstName'>First Name:{mock_data[5].author.firstName}</p>
        <p className='lastName'>Last Name:{mock_data[5].author.lastName}</p>
        <p className='title'>Title:{mock_data[6].title}</p>
        <p className='Content'>Content:{mock_data[6].content}</p>
        <p className='firstName'>First Name:{mock_data[6].author.firstName}</p>
        <p className='lastName'>Last Name:{mock_data[6].author.lastName}</p>


      </div>
    </div>
  );
};

JayLimBoards.propTypes = {};

export default JayLimBoards;
