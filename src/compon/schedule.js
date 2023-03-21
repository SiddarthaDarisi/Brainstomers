import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Navbar from './Navbar';



  
const scheduleData = [
  { day: 'Monday', time: '5AM-6AM IST', Level:'Beginner batch 1',   batch: '1',  },
  { day: 'Thursday', time: '5AM-6AM IST', Level:'Beginner batch 1',   batch: '2',  },
  { day: 'Monday', time: '6AM-7AM IST',  Level:'Intermediate batch 1 ', batch: '1',  },
  { day: 'Thursday', time: '6AM-7AM IST',  Level:'Intermediate batch 1', batch: '2',  },
  { day: 'Saturday', time: '5AM-6AM IST', Level:'Advanced batch 1',   batch: '1',  },
  { day: 'Sunday', time: '5AM-6AM IST', Level:'Advanced batch 1',   batch: '1&2',  },
  { day: 'Saturday', time: '6AM-7AM IST', Level:'Beginner batch 2',   batch: '2',  },
  { day: 'Sunday', time: '6AM-7AM IST', Level:'Beginner batch 2',   batch: '1&2',  },
  
];


function Schedule() {


  return (
    <div>       
        <header>
            {<Navbar    />}
        </header>
        <TableContainer component={Paper} >
            <Table sx={{marginTop:"10vh"}}  aria-label="schedule table">
            <TableHead>
            <TableRow>
                <TableCell>Level</TableCell>
                <TableCell>Day</TableCell>
                <TableCell>Time</TableCell>
                
                
                
             
            </TableRow>
            </TableHead>
            <TableBody>
            {scheduleData.map((row) => (
                <TableRow key={row.day + row.time}>
                <TableCell>{row.Level}</TableCell>
                <TableCell component="th" scope="row">{row.day}</TableCell>
                <TableCell>{row.time}</TableCell>
                
               
               
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    
    </div>        
    
  );
};

export default Schedule;