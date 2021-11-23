import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import projectPlan from '../.././documents/Project Plan.pdf';
import meeting1 from '../.././documents/Meeting Minutes_1.pdf';
import meeting2 from '../.././documents/Meeting Minutes_2.pdf';
import meeting3 from '../.././documents/Meeting Minutes_3.pdf';

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
    pdfItem:{
        width:"100%",
        height: "800px"
    }
}));
export default function DocumentTab() {
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
            centered
            className={classes.titleBar}
            >
            {gallery.map(img => (
                <Tab label={img.title} {...a11yProps(img.id)} />
            ))}
            </Tabs>
        </AppBar>
        {gallery.map(pdf => (
            <TabPanel value={value} index={pdf.id} className={classes.item}>
                <embed className={classes.pdfItem} 
                    type="application/pdf" 
                    src={`${pdf.src}`}>
                </embed>
            </TabPanel>
        ))}
        
        </div>
    );
}

const gallery = [
    {
        id: 0,
        title: "PROJECT PLAN",
        src: projectPlan,
    },
    {
        id: 1,
        title: "MEETING MINUTES NO.1 (WEEK 1)",
        src: meeting1,
    },
    {
        id: 2,
        title: "MEETING MINUTES NO.2 (WEEK 2)",
        src: meeting2,
    },
    {
        id: 3,
        title: "MEETING MINUTES NO.3 (WEEK 2)",
        src: meeting3,
    },
]