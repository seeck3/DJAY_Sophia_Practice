import React, { useState } from 'react';

const Register = (prompt) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function firstNameValue(event) {}
  return (
    <div>
      {firstName}
      <br />
      {lastName}
      <br />
      {email}
      <br />
      {password}
      <br />

      <form>
        <label for='firstName'>First Name</label>
        <input
          id='firstName'
          name='firstName'
          type='text'
          onChange={function (event) {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <label for='lastName'> Last Name</label>
        <input
          id='lastName'
          name='lastName'
          type='text'
          onChange={function (event) {
            setLastName(event.target.value);
          }}
        />

        <br />
        <label for='email'> email</label>
        <input
          id='email'
          name='email'
          type='text'
          onChange={function (event) {
            setEmail(event.target.value);
          }}
        />

        <br />
        <label for='password'>password</label>
        <input
          id='password'
          name='password'
          type='text'
          onChange={function (event) {
            setPassword(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Register;
