import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CreateBoard.css";

const CreateBoard = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  
  return (
    <div>
      <form>
            
          {title}
          <br />
          <label for="title"> Title: </label>
          <input
            id="title"
            Name="title"
            type="text"
            onChange={function (event) {
              setTitle(event.target.value);
            }}
          />

          <br />
          {content}
          <br />
          <label for="content">Content: </label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            onChange={function (event) {
              setContent(event.target.value);
            }}
          ></textarea>

          <br />
          {firstName}
          <br />
          <label for="firstName">First Name: </label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            onChange={function (event) {
              setFirstName(event.target.value);
            }}
          />

          <br />
          {lastName}
          <br />
          <label for="lastName">Last Name: </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={function (event) {
              setLastName(event.target.value);
            }}
          />
          <br />
        <button>Create Board</button>
      </form>
    </div>
  );
};

CreateBoard.propTypes = {};

export default CreateBoard;
