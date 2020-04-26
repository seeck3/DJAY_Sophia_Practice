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
      <p style={{ color: "blue" }}>{title + " "}</p>
      {firstName + " "}
      {lastName}
      <br />
      <p class="content">{content}</p>
      <br />

      <form class="boxes">
        <label>Title :</label>
        <input
          class="title"
          id="title"
          name="title"
          type="text"
          onChange={function (event) {
            setTitle(event.target.value);
          }}
        />

        <br />

        <label>First Name : </label>
        <input
          for="firstName"
          name="firstName"
          type="text"
          onChange={function (event) {
            setFirstName(event.target.value);
          }}
        />

        <br />

        <label>Last Name : </label>
        <input
          for="lastName"
          name="lastName"
          type="text"
          onChange={function (event) {
            setLastName(event.target.value);
          }}
        />

        <br />

        <label for="content">Content : </label>
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
      </form>
    </div>
  );
};

CreateBoard.propTypes = {};

export default CreateBoard;
