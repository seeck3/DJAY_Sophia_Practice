import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Box,
  makeStyles,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import DJBoards from '../Boards/DJ/DJBoards';
import JayLimBoards from '../Boards/JayLim/JayLimBoards';
import SophiaBoards from '../Boards/Sophia/SophiaBoards';
import MarcoBoards from '../Boards/Marco/MarcoBoards';

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabContainer = (props: any) => {
  const classes = useStyles();
  // 학생에 맞춰서 바꿀것 동준=0 재호=1 혜미=2
  const [value, setValue] = React.useState(3);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar position='static' color='secondary'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab color='textPrimary' label='DJ' {...a11yProps(0)} />
          <Tab color='textPrimary' label='Jay' {...a11yProps(1)} />
          <Tab color='textPrimary' label='Sophia' {...a11yProps(2)} />
          <Tab color='textPrimary' label='Marco' {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <DJBoards />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JayLimBoards />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SophiaBoards />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MarcoBoards />
      </TabPanel>
    </div>
  );
};

TabContainer.propTypes = {};

export default TabContainer;
