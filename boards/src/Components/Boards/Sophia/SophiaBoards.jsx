import React, { useState } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

import mock_data from '../../../MockData/Data';
import CreateBoard from './CreateBoard';

const SophiaBoards = (props) => {
  const [isCreate, setIsCreate] = useState(false);

  console.log('this is fake data', mock_data[3]);

  function myArticle() {
    console.log('The truth is Jay is actually dating Madonna!');
  }

  return (
    <div>
      <div>
        {' '}
        <div className='icon-container'>
          <img
            src='data:image/png;base64,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'
            alt='books'
            width='70'
            height='80'
          ></img>
        </div>
        <h1 className='header1'> Queen Sophia</h1>
        <button
          onClick={function () {
            setIsCreate(!isCreate);
          }}
        >
          {isCreate ? 'Go Back' : 'Add Board'}
        </button>
        {isCreate && <CreateBoard />}
        <h2 classNamer='header2'> (This is just an example)</h2>
      </div>

      {!isCreate && (
        <div>
          <div>
            <p className='title'>Title : {mock_data[0].title}</p>
            <p>Content :{mock_data[0].content}</p>
            <p>First Name :{mock_data[0].author.firstName}</p>
            <p>Last Name :{mock_data[0].author.lastName}</p>
          </div>

          <p className='sentence'>( He wish he had a scandal with Beyonce).</p>

          <button className='button1'> reveal the truth here! </button>

          <div>
            <p className='title'>Title : {mock_data[1].title}</p>
            <p>Content :{mock_data[1].content}</p>
            <p>First Name :{mock_data[1].author.firstName}</p>
            <p>Last Name : {mock_data[1].author.lastName}</p>
          </div>
          <p className='sentence0'>(Let's get it DJ SEO!)</p>
          <button className='button3'> see where he is headed now!</button>

          <div>
            <p className='title2'>Title : {mock_data[2].title}</p>
            <p>Content : {mock_data[2].content}</p>
            <p>First Name : {mock_data[2].author.firstName}</p>
            <p>Last Name : {mock_data[2].author.lastName}</p>
          </div>

          <p className='sentence1'>(Only in Marco's chinky eyes.)</p>
          <button className='button2'>
            click to see how she really looks like!{' '}
          </button>

          <div>
            <p className='title3'>Title : {mock_data[3].title}</p>
            <p>Content : {mock_data[3].content}</p>
            <p>First Name : {mock_data[3].author.firstName}</p>
            <p>Last Name : {mock_data[3].author.lastName}</p>
          </div>
          <div>
            <p className='title4'>Title : {mock_data[4].title}</p>
            <p>Content : {mock_data[4].content}</p>
            <p>First Name : {mock_data[4].author.firstName}</p>
            <p>Last Name : {mock_data[4].author.lastName}</p>
          </div>
          <div>
            <p className='title5'>Title : {mock_data[5].title}</p>
            <p>Content : {mock_data[5].content}</p>
            <p>First Name :{mock_data[5].author.firstName}</p>
            <p>Last Name : {mock_data[5].author.lastName}</p>
          </div>
          <div>
            <p className='title6'>Title : {mock_data[6].title}</p>
            <p>Content : {mock_data[6].content}</p>
            <p>First Name : {mock_data[6].author.firstName}</p>
            <p>Last Name : {mock_data[6].author.lastName}</p>
          </div>
        </div>
      )}
    </div>
  );
};

SophiaBoards.propTypes = {};

export default SophiaBoards;
