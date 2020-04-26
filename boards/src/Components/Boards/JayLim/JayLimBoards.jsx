import React, { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";

import mock_data from "../../../MockData/Data";
import CreateBoard from "./CreateBoard.jsx";

//Components


const JayLimBoards = (props) => {
  const [isCreate, setIsCreate] = useState(false);
  console.log(mock_data[2]);
  return (
    <div>
      {/* <Register /> */}
      <div>
        <p className="header"> Daily Best</p>

        <button
          onClick={function () {
            setIsCreate(!isCreate);
          }}
        >
          {" "}
          {!isCreate && 'Add Board'}
         {isCreate && 'Go Back'}
        </button>
      </div>
      {isCreate && <CreateBoard />}
      {!isCreate && (
        <div>
          <div>
            <p className="title">Title: {mock_data[0].title}</p>
            <p className="Content">Content: {mock_data[0].content}</p>
            <div className="nameAlign">
              <div className="alignRight">
                <p className="firstName">
                  First Name: {mock_data[0].author.firstName}
                </p>
                <p className="lastName">
                  Last Name: {mock_data[0].author.lastName}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="title">Title:{mock_data[1].title}</p>
            <p className="Content">content:{mock_data[1].content}</p>
            <div className="nameAlign">
              <div className="alignRight">
                <p className="firstName">
                  First Name:{mock_data[1].author.firstName}
                </p>
                <p className="lastName">
                  Last Name:{mock_data[1].author.lastName}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="title">Title:{mock_data[2].title}</p>
            <p className="Content">content:{mock_data[2].content}</p>
            <div className="nameAlign">
              <div className="alignRight">
                <p className="firstName">
                  First Name:{mock_data[2].author.firstName}
                </p>
                <p className="lastName">
                  Last Name:{mock_data[2].author.lastName}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="title">Title:{mock_data[3].title}</p>
            <p className="Content">Content:{mock_data[3].content}</p>
            <div className="nameAlign">
              <div className="alignRight">
                <p className="firstName">
                  First Name:{mock_data[3].author.firstName}
                </p>
                <p className="lastName">
                  Last Name:{mock_data[3].author.lastName}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="title">Title:{mock_data[4].title}</p>
            <p className="Content">Content:{mock_data[4].content}</p>
            <div className="nameAlign">
              <div className="alignRight">
                <p className="firstName">
                  First Name:{mock_data[4].author.firstName}
                </p>
                <p className="lastName">
                  Last Name:{mock_data[4].author.lastName}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="title">Title:{mock_data[5].title}</p>
            <p className="Content">content:{mock_data[5].content}</p>
            <div className="nameAlign">
              <div className="alignRight">
                <p className="firstName">
                  First Name:{mock_data[5].author.firstName}
                </p>
                <p className="lastName">
                  Last Name:{mock_data[5].author.lastName}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="title">Title:{mock_data[6].title}</p>
            <p className="Content">Content:{mock_data[6].content}</p>
            <div className="nameAlign">
              <div className="alignRight">
                <p className="firstName">
                  First Name:{mock_data[6].author.firstName}
                </p>
                <p className="lastName">
                  Last Name:{mock_data[6].author.lastName}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

JayLimBoards.propTypes = {};

export default JayLimBoards;
