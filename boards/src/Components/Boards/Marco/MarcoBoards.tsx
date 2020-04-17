import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

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

const MarcoBoards = (props: any) => {
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

  return (
    <div>
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

export default MarcoBoards;
