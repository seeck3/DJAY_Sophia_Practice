import React, { useState } from 'react';

const CreateBoard = (prompt) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      {title}
      <br />
      {content}
      <br />
      {firstName}
      <br />
      {lastName}
      <br />
      CreateBoard
      <form>
        <label for='title'>Title:</label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={function (event) {
            setTitle(event.target.value);
          }}
        />
        <br />
        <label for='content'> Content</label>
        <textarea
          name='content'
          id='content'
          cols='30'
          rows='10'
          onChange={function (event) {
            setContent(event.target.value);
          }}
        ></textarea>
        <br />
        <label for='firstName'>First Name</label>
        <input
          name='firstName'
          id='firstName'
          type='text'
          onChange={function (event) {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <label for='lastName'>Last Name</label>
        <input
          name='lastName'
          id='lastName'
          type='text'
          onChange={function (event) {
            setLastName(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default CreateBoard;
