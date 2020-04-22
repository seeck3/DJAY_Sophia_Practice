import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// Redux
import { connect } from 'react-redux';
import { getBoards } from '../../../Redux/Actions/board';

// Google Login
import GoogleLogin from 'react-google-login';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEdit,
  faArrowLeft,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

import mock_data from '../../../MockData/Data';

import './MarcoBoards.css';
import axios from 'axios';

import setAuthToken from '../../../Redux/setAuthToken';
import { logout } from '../../../Redux/Actions/auth';
import { Redirect } from 'react-router-dom';

const MarcoBoards = ({
  logout,
  getBoards,
  boardLists: { boards },
  isAuthenticated,
}: any) => {
  useEffect(() => {
    getBoards();
  }, [getBoards]);

  const [clickedBoard, setClickedBoard] = useState<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<any>([]);
  // const login = async () => {
  //   // const config = {
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //   },
  //   // };
  //   const formData = {
  //     email,
  //     password,
  //   };
  //   try {
  //     // const loginUser = await axios.post('/api/auth/login', formData, config);
  //     // .catch((err) => {
  //     //   console.log('err', err.response.data.errors);
  //     // });
  //     // console.log('loginUser', loginUser);
  //     // if (loginUser) {
  //     //   const token = loginUser.data.token;
  //     //   localStorage.setItem('token', token);
  //     //   setAuthToken(token);
  //     // }
  //   } catch (error) {
  //     // console.log('error : ', error.response.data);
  //     // setError([...error.response.data.errors]);
  //     // setTimeout(() => {
  //     //   setError(null);
  //     // }, 1500);
  //   }
  // };
  // const logoff = async () => {
  //   // console.log('logoff');
  //   // await axios.get('/api/auth/logoff');
  //   logout();
  // };

  const onCreate = () => {
    alert('Creating~~~');
  };

  function onDelete() {
    alert('Deleting~~');
  }

  const onEdit = () => {
    alert('Editing~~');
  };

  const responseGoogle = (res: any) => {
    console.log('res', res);
  };
  let items = [];
  for (let i = 0; i < mock_data.length; i++) {
    items.push(
      <tr>
        <td onClick={() => setClickedBoard(mock_data[i])}>
          {mock_data[i].title}
        </td>
        <td>
          {mock_data[i].author.firstName + ' ' + mock_data[i].author.lastName}
        </td>
        <td>{<Moment format='MM/DD/YYYY'>{mock_data[i].createdOn}</Moment>}</td>
        <td>
          <button onClick={() => onDelete()}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button onClick={() => onEdit()}>
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </td>
      </tr>
    );
  }
  let renderComponent;
  if (!clickedBoard) {
    renderComponent = (
      <table>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Created On</th>
          <th>Action</th>
        </tr>
        {items}
      </table>
    );
  } else {
    renderComponent = (
      <div>
        <div>
          <p>
            <strong>Title: </strong>
            {clickedBoard.title}
          </p>
          <p>
            <strong>Content: </strong>
            {clickedBoard.content}
          </p>
          <p>
            <strong>Created By: </strong>
            {clickedBoard.author.firstName + ' ' + clickedBoard.author.lastName}
          </p>
        </div>
        <button onClick={() => setClickedBoard(null)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    );
  }
  if (!isAuthenticated) return <Redirect to='/login' />;
  return (
    <div>
      <div>
        {/* <GoogleLogin
          clientId='28366971351-i9a8u6vctn8ij1h77pa5v53i3j346oct.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        <input type='text' onChange={(e) => setEmail(e.target.value)} />
        <input type='text' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}>login</button> */}
      </div>
      <div>{!!error && error.map((err: any) => <div>{err.msg}</div>)}</div>
      <div className='header-container'>
        <h1>This is Marco Boards</h1>
        <button onClick={onCreate}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>

      {renderComponent}
    </div>
  );
};

MarcoBoards.propTypes = {};

const mapStateToProps = (state: any) => ({
  boardLists: state.board,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getBoards, logout })(MarcoBoards);
