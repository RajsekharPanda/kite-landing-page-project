import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const ButtonSignin = () => {
  return (
    <div>
        <Box sx={{ '& button': { m: 1, "&:hover":{bgcolor:'black'} } }} className='mx-auto'>
            <Button size='large' variant="contained" className='w-40'>Sign up now</Button>
        </Box>
    </div>
  )
}
