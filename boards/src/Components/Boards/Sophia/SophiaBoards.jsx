import React from "react";
import './styles.css'
import PropTypes from "prop-types";

import mock_data from "../../../MockData/Data";

const SophiaBoards = props => {
  console.log("this is fake data", mock_data[3]);
  return (
    <div>
     <div> <h1 className='header1'>This Is Sophia Boards</h1>
    
    </div>
    <div>
      <p>Title : {mock_data[0].title}</p>
      <p>Content :{mock_data[0].content}</p>
      <p>First Name :{mock_data[0].author.firstName}</p>
      <p>Last Name :{mock_data[0].author.lastName}</p>
    </div>
    </div>
  );
};

SophiaBoards.propTypes = {};

export default SophiaBoards;
