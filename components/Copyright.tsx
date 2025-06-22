import { Box, Container, Typography } from "@mui/material"



const Copyright = () => {
  return (
    <Box sx={{padding:'22px 0', textAlign:'center'}}>
        <Container maxWidth='lg'>
         <Typography variant="body2" sx={{ mb: 0.5,fontWeight:'500', fontFamily:'jost',color:'#222', textTransform:'uppercase' }}>
         ©2025 glitter jewels - all rights reserved.
                  </Typography>
                  </Container>
    </Box>
  )
}

export default Copyright