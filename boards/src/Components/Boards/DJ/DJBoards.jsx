
import React, { useState } from "react";

import "./styles.css"
import PropTypes from "prop-types";

import mock_data from "../../../MockData/Data";


//COmponents//
import CreateBoard from "./CreateBoard";
import Register from "./Register";



const DJBoards = props => {
  const [isCreate, setIsCreate] = useState(false);
  
  // console.log("this is fake data", mock_data[0]);


  return (
    <div>
      <h1> This is DJSEO's board</h1>
      <button onClick={function()
      {
        setIsCreate(!isCreate);
      }}> 

      {isCreate && "BACK"}
      {!isCreate && "Add Board"}
      </button>

      {isCreate && <CreateBoard/>}
      


      <div>
      <h1 className="header1">Welcome to DJ's World</h1>
      </div>
          
        <div className="mock0">
          <p className="mock01">Title: {mock_data[0].title}</p>        
          <p>Content: {mock_data[0].content}</p>
          <p className="mock0FirstName">First Name: {mock_data[0].author.firstName}</p>
          <p className="mock0LastName">Last Name: {mock_data[0].author.lastName}</p>
        </div>
        <br></br>

        <div className="mock1">
          <p className="mock11">Title: {mock_data[1].title}</p>
          <p>Content: {mock_data[1].content}</p>
          <p>First Name: {mock_data[1].author.firstName}</p>
          <p>Last Name: {mock_data[1].author.lastName}</p>

        </div><br></br>

        <div className="mock2">
          <p>Title: {mock_data[2].title}</p>
          <p>Content: {mock_data[2].content}</p>
          <p>First Name: {mock_data[2].author.firstName}</p>
          <p>Last Name: {mock_data[2].author.lastName}</p>
        </div><br></br>


        <div className="mock3">
          <p>Title: {mock_data[3].title}</p>
          <p>Content: {mock_data[3].content}</p>
          <p>First Name: {mock_data[3].author.firstName}</p>
          <p>Last Name: {mock_data[3].author.lastName}</p>
        </div><br></br>

        
        <div className="mock4">
          <p>Title: {mock_data[4].title}</p>
          <p>Content: {mock_data[4].content}</p>
          <p>First Name: {mock_data[4].author.firstName}</p>
          <p>Last Name: {mock_data[4].author.lastName}</p>
        </div><br></br>

        
        <div className="mock5">
          <p>Title: {mock_data[5].title}</p>
          <p>Content: {mock_data[5].content}</p>
          <p>First Name: {mock_data[5].author.firstName}</p>
          <p>Last Name: {mock_data[5].author.lastName}</p>
        </div><br></br>

        
        <div className="mock6">
          <p>Title: {mock_data[6].title}</p>
          <p>Content: {mock_data[6].content}</p>
          <p>First Name: {mock_data[6].author.firstName}</p>
          <p>Last Name: {mock_data[6].author.lastName}</p>
        </div><br></br>

    </div>
  );
  };

DJBoards.propTypes = {};

export default DJBoards;
