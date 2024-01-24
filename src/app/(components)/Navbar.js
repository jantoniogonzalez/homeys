'use client'

import { Box, TextField } from '@mui/material';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Navbar() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 1rem',
          height: '60px',
          color: '#fff',
          backgroundColor: '#1976d2'      
        }}>
        <div>Logo</div>
        <Box>
          <TextField />
          <TextField />
          <DatePicker />
          <DatePicker />
          <Fab>
            <SearchIcon />
          </Fab>
        </Box>
        <div>Login</div>
      </nav>
    </LocalizationProvider>
  );
}

export default Navbar;