import React from "react";
import PropTypes from "prop-types";

import mock_data from "../../../MockData/Data";

const DJBoards = props => {
  console.log("this is fake data", mock_data);

  return (
    <div>
      <h1>This Is DJ Boards</h1>
      <p>게시판을 여기다가 만드시오</p>
      {/* example code */}
      <p>
        <strong>Title</strong> : {mock_data[1].title}
        <br />
        <strong>Content</strong> : {mock_data[1].content}
        <br />
        <strong>Author</strong> :{" "}
        {mock_data[1].author.firstName + " " + mock_data[1].author.lastName}
      </p>
    </div>
  );
};

DJBoards.propTypes = {};

export default DJBoards;
