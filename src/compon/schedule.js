import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Navbar from './Navbar';



  
const scheduleData = [
  { day: 'Monday', time: '5AM-6AM IST', Level:'Beginner',   batch: '1',  },
  { day: 'Monday', time: '6AM-7AM IST',  Level:'Intermediate', batch: '1',  },
  { day: 'Thursday', time: '5AM-6AM IST', Level:'Beginner',   batch: '2',  },
  { day: 'Thursday', time: '6AM-7AM IST',  Level:'Intermediate', batch: '2',  },
  { day: 'Saturday', time: '5AM-6AM IST', Level:'Advanced',   batch: '1',  },
  { day: 'Saturday', time: '6AM-7AM IST', Level:'Advanced',   batch: '2',  },
  { day: 'Sunday', time: '5AM-6AM IST', Level:'Advanced',   batch: '1&2',  },
  { day: 'Sunday', time: '6AM-7AM IST', Level:'Beginner, Intermediate,Advanced',   batch: '1&2',  },
  
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
                <TableCell>Day</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Level</TableCell>
                <TableCell>Batch</TableCell>
                
             
            </TableRow>
            </TableHead>
            <TableBody>
            {scheduleData.map((row) => (
                <TableRow key={row.day + row.time}>
                <TableCell component="th" scope="row">{row.day}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.Level}</TableCell>
                <TableCell>{row.batch}</TableCell>
               
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    
    </div>        
    
  );
};

export default Schedule;