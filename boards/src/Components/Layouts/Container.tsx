import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import DJBoards from '../Boards/DJ/DJBoards';
import JayLimBoards from '../Boards/JayLim/JayLimBoards';
import SophiaBoards from '../Boards/Sophia/SophiaBoards';
import TabContainer from './TabContainer';

const Container = (props: any) => {
  return (
    <Fragment>
      <div className='main-container'>
        <TabContainer />
      </div>
    </Fragment>
  );
};

Container.propTypes = {};

export default Container;
