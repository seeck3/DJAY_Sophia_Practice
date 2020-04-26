import React from "react";
import PropTypes from "prop-types";

const CreateBoard = (props) => {
  return (
    <div>
      Create a board
      <div>
        <form>
          <label for="title">Title : </label>
          <input id="title" name="title" type="text" />
          <br />
          <label for="content">Content : </label>
          <textarea name="content" id="content" cols="30" rows="10"></textarea>
          <br />
          <label for="firstName">First Name : </label>
          <input name="firstName" id="firstName" type="text" />
          <br />
          <label for="lastName">Last Name : </label>
          <input type="text" name="lastName" id="lastName" />
        </form>
      </div>
    </div>
  );
};

CreateBoard.propTypes = {};

export default CreateBoard;
