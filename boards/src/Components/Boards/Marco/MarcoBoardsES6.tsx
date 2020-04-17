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

const MarcoBoardsES6 = ({ getBoards, boardLists: { boards } }: any) => {
  useEffect(() => {
    getBoards();
  }, [getBoards]);

  const [clickedBoard, setClickedBoard] = useState();

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

  return (
    <div>
      <div>
        <GoogleLogin
          clientId='28366971351-i9a8u6vctn8ij1h77pa5v53i3j346oct.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <div className='header-container'>
        <h1>This is Marco Boards</h1>
        <button onClick={onCreate}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>

      {!clickedBoard ? (
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
          {mock_data.map((data) => (
            <tr>
              <td onClick={() => setClickedBoard(data)}>{data.title}</td>
              <td>{data.author.firstName + ' ' + data.author.lastName}</td>
              <td>{<Moment format='MM/DD/YYYY'>{data.createdOn}</Moment>}</td>
              <td>
                <div className='action-container'>
                  <button onClick={() => onDelete()}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                  <button onClick={() => onEdit()}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </table>
      ) : (
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
              {clickedBoard.author.firstName +
                ' ' +
                clickedBoard.author.lastName}
            </p>
          </div>
          <button onClick={() => setClickedBoard(null)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
      )}
    </div>
  );
};

MarcoBoardsES6.propTypes = {};

const mapStateToProps = (state: any) => ({ boardLists: state.board });

export default connect(mapStateToProps, { getBoards })(MarcoBoardsES6);
