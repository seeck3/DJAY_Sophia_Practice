import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt,
  faEdit,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import mock_data from '../../../MockData/Data';

import './MarcoBoards.css';

const MarcoBoards = (props: any) => {
  const [clickedBoard, setClickedBoard] = useState();
  //   React.useEffect(() => {
  //     console.log(clickedBoard);
  //   }, [clickedBoard]);
  let items = [];
  function onDelete() {
    alert('Deleting~~');
  }

  const onEdit = () => {
    alert('Editing~~');
  };

  //   for (let i = 0; i < mock_data.length; i++) {
  //     items.push(
  //       <tr>
  //         <td onClick={() => setClickedBoard(mock_data[i])}>
  //           {mock_data[i].title}
  //         </td>
  //         <td>
  //           {mock_data[i].author.firstName + ' ' + mock_data[i].author.lastName}
  //         </td>
  //         <td>{<Moment format='MM/DD/YYYY'>{mock_data[i].createdOn}</Moment>}</td>
  //         <td>
  //           <button onClick={() => onDelete()}>
  //             <FontAwesomeIcon icon={faTrashAlt} />
  //           </button>
  //           <button onClick={() => onEdit()}>
  //             <FontAwesomeIcon icon={faEdit} />
  //           </button>
  //         </td>
  //       </tr>
  //     );
  //   }

  return (
    <div>
      <h1>This is Marco Boards</h1>

      {!clickedBoard ? (
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Created On</th>
            <th>Action</th>
          </tr>
          {/* {items} */}
          {mock_data.map((data) => (
            <tr>
              <td onClick={() => setClickedBoard(data)}>{data.title}</td>
              <td>{data.author.firstName + ' ' + data.author.lastName}</td>
              <td>{<Moment format='MM/DD/YYYY'>{data.createdOn}</Moment>}</td>
              <td>
                <button onClick={() => onDelete()}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
                <button onClick={() => onEdit()}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
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

MarcoBoards.propTypes = {};

export default MarcoBoards;
