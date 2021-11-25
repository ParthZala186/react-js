import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '../TabView';
export default function FormContainer() {
    return (
        <>            
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#808080', height: '100vh', width:"100%" }}>
                    <Tabs/>
                </Box>
            </Container>            
        </>
    )
}
