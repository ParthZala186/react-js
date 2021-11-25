import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import { Typography } from '@mui/material';
import FanSingUp from '../FanSignUp';

import TalentSignUp from '../TalentSignUp';
const SignUpFormContainer = () =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle={width:"500px", margin:"50px auto"}

    function TabPanel(props){
        const {children, value, index, ...other} = props;

        return(
            <div
                role="tabpanel"
                hidden={value!== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tabpanel-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        )
    }

    return(
        <>
            <Paper style={paperStyle}>
                <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Fan Singup" />                    
                    <Tab label="Talent Signup" />
                </Tabs>
                <TabPanel value={value} index={0}><FanSingUp/></TabPanel>
                <TabPanel value={value} index={1}><TalentSignUp/></TabPanel>
            </Paper>
        </>
    )
}

export default SignUpFormContainer