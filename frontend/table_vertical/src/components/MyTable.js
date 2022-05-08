import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function MyTable() {
  return (
  <Box display="flex" flexDirection="row" >
    <TableContainer >
<Table>
  <TableBody>
    <TableRow>
        <TableCell variant="head">Scheduled Work Start Date</TableCell>
        <TableCell>3/21/2022</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Actual Work Start Date</TableCell>
        <TableCell>3/24/2022</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Total No of STD Days</TableCell>
        <TableCell>4</TableCell>
    </TableRow>
  </TableBody>
</Table>
    </TableContainer>
    <TableContainer>
<Table>
  <TableBody>
    <TableRow>
        <TableCell variant="head">Scheduled Work End Date</TableCell>
        <TableCell>3/28/2022</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Actual Work End Date</TableCell>
        <TableCell>4/1/2022</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Total No of Hours</TableCell>
        <TableCell>44</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </TableContainer>
    <TableContainer>
<Table>
  <TableBody>
    <TableRow>
        <TableCell variant="head">Performacne Rating</TableCell>
        <TableCell>Acceptable</TableCell>
    </TableRow>
    <TableRow>
        <TableCell variant="head">Average Hours /Day</TableCell>
        <TableCell>11</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </TableContainer>

</Box>
  );
}

