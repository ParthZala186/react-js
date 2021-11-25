import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FanSignUp from './FanSignUp';
import TalentSignUp from './TalentSignUp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabView() {
  const [value, setValue] = React.useState(0);
  const [checkbackgroundColor, setBackgroundColor] =React.useState({})  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setBackgroundColor("green")
  };
  return (
    <Box sx={{width:"100%"}}>

      <Box component="span" sx={{ p: 2}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Fan signUp" {...a11yProps(0)} style={{color:"white", border:"none",padding: "0.5em 3em",backgroundColor:value==0 ? checkbackgroundColor : "", borderTopRightRadius: "26px", borderBottomRightRadius: "26px", borderTopLeftRadius: "26px", borderBottomLeftRadius: "26px"}} />
          <Tab label="Talent signUp" {...a11yProps(1)} style={{color:"white", border:"none",padding: "0.5em 3em",backgroundColor:value == 1 ?  checkbackgroundColor : "", borderTopRightRadius: "26px", borderBottomRightRadius: "26px", borderTopLeftRadius: "26px", borderBottomLeftRadius: "26px"}}/>          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>        
        <FanSignUp/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TalentSignUp/>
      </TabPanel>      
    </Box>
  );
}