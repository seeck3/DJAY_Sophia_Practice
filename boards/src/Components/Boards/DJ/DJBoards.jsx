import React from "react";
import "./styles.css"
import PropTypes from "prop-types";

import mock_data from "../../../MockData/Data";

const DJBoards = props => {
  console.log("this is fake data", mock_data[2]);

  return (
    <div>
      <div>
      <h1 className="header1"> This Is DJ Boards</h1>
      </div>
          
        <div>

          <p>Title: {mock_data[0].title}</p>        
          <p>Content: {mock_data[0].content}</p>
          <p>First Name: {mock_data[0].firstName}</p>
          <p>Last Name: {mock_data[0].lastName}</p>

        </div>  

    </div>
  );
  };

DJBoards.propTypes = {};

export default DJBoards;
