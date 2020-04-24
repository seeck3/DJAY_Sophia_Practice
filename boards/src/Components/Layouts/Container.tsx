import React, { Fragment } from 'react';
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
