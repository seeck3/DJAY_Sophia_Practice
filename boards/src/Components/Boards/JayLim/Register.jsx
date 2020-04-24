import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Register = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            {firstName}
            <br/>
            <form>
              <label for="fistName">First Name:</label>
              <input id="firstName" Name="firstName" type="text" onChange={function(event){
                  setFirstName(event.target.value);
            }}/>
              <br />
              {lastName}
              <br/>
              <label for="lastName">Last Name:</label>
              <input id="lastName" Name="lastName" type="text" onChange={function(event){
                  setLastName(event.target.value);}}/>
              <br />
              {email}
              <br/>
              <label for="email">Email:</label>
              <input id="email" Name="email" type="text" onChange={function(event){
                  setEmail(event.target.value);}}/>
              <br />
              {password}
              <br/>
              <label for="password">Password:</label>
              <input id="password" Name="password" type="password" onChange={function(event){
                  setPassword(event.target.value);}}/>
              <br/>
            </form>
        </div>
    )
}

Register.propTypes = {};

export default Register