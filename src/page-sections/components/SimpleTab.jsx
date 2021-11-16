import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import tutorial from '../.././img/tutorial.png';
import gamePage from '../.././img/game-page.png';
import homePage from '../.././img/home-page.png';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: "#181818 !important",
    },
    appBar:{
        color: "white",
        boxShadow: "none !important"
    },
    titleBar:{
        color:"white",
        backgroundColor:"#181818"
    },
    item:{
        color:"white"
    },
    projectImg:{
        width: "100%"
    }
}));
export default function SimpleTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
            <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="primary"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className={classes.titleBar}
            >
            {gallery.map(img => (
                <Tab label={img.title} {...a11yProps(img.id)} />
            ))}
            </Tabs>
        </AppBar>
        {gallery.map(img => (
            <TabPanel value={value} index={img.id} className={classes.item}>
                <img alt={img.title} src={img.src} className={classes.projectImg}/>
            </TabPanel>
        ))}
        
        </div>
    );
}

const gallery = [
    {
        id: 0,
        title: "Home Page",
        src: homePage,
    },
    {
        id: 1,
        title: "Game Page",
        src: gamePage,
    },
    {
        id: 2,
        title: "Tutorial",
        src: tutorial,
    },
    {
        id: 3,
        title: "Home Page",
        src: homePage,
    },
    {
        id: 4,
        title: "Game Page",
        src: gamePage,
    },
    {
        id: 5,
        title: "Tutorial",
        src: tutorial,
    },
    {
        id: 6,
        title: "Home Page",
        src: homePage,
    },
    {
        id: 7,
        title: "Game Page",
        src: gamePage,
    },
    {
        id: 8,
        title: "Tutorial",
        src: tutorial,
    },
]