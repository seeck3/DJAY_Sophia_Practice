import React, { useState, useEffect } from "react";
import "./styles.css";
import PropTypes from "prop-types";

import mock_data from "../../../MockData/Data";
import CreateBoard from "./CreateBoard";

const SophiaBoards = (props) => {
  const [isCreate, setIsCreate] = useState(false);
  const [data, setData] = useState(mock_data);

  let dataMapping = [];

  for (let i = 0; i < data.length; i++) {
    dataMapping.push(
      <div>
        <p className="title">Title : {data[i].title}</p>
        <p>Content :{data[i].content}</p>
        <p>First Name :{data[i].author.firstName}</p>
        <p>Last Name :{data[i].author.lastName}</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        {" "}
        <div className="icon-container"></div>
        <h1 className="header1"> Queen Sophia</h1>
        <button
          onClick={function () {
            setIsCreate(!isCreate);
          }}
        >
          {isCreate ? "Go Back" : "Add Board"}
        </button>
        <CreateBoard setData={setData} data={data} />
        <h2 classNamer="header2"> (This is just an example)</h2>
      </div>
      {dataMapping}
    </div>
  );
};

SophiaBoards.propTypes = {};

export default SophiaBoards;
