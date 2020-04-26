//rfacp//

import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Register = props => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLasttName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function firstNameValue(event){

    }

    return (
        <div>
            {firstName}
            {lastName}<br/>
            {email}<br/>
            {password}<br/>

            <form>
                <label for="firstName">First Name:</label>
                <input id="firstName" name="firstName" type="text" onChange={function(event) {
                    setFirstName(event.target.value);
                    }} />

                <br />

                <label for="lastName">Last Name:</label>
                <input id="lastName" name="lastName" type="text" onChange={
                    function(event){setLasttName(event.target.value)
                    }}/>
                <br />

                <label for="email">E-mail:</label>
                <input id="email" name="email" type="text" onChange={
                    function(event){setEmail(event.target.value)
                    }}/>
                <br />

                <label for="password">Password:</label>
                <input id="password" name="password" type="text" onChange={
                    function(event){setPassword(event.target.value)
                }}/>
                
                <br />


            </form>
            
        </div>
    )
}

Register.propTypes = {

}

export default Register
