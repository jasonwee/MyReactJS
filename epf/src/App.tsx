import * as React from 'react';
//import logo from './logo.svg';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
//import './App.css';
//import Button from '@mui/material/Button';
//import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { DataGrid, GridColDef, GridRowsProp, GridColumnGroupingModel } from '@mui/x-data-grid';




function App() {

    const columns: GridColDef[] = [
  { field: 'month', headerName: 'Month' },
  { field: 'employer', headerName: 'Employer (RM)', type: 'number', editable: true, width: 120, cellClassName: 'super-app-theme--cell', },
  { field: 'employee', headerName: 'Employee (RM)', type: 'number', editable: true, width: 120, cellClassName: 'super-app-theme--cell', },
  { field: 'total_emp', headerName: 'Total (RM)', type: 'number', width: 120},
  { field: 'account1', headerName: 'Account 1 (RM)', type: 'number', width: 120},
  { field: 'account2', headerName: 'Account 2 (RM)', type: 'number', width: 120},
  { field: 'total', headerName: 'Total (RM)', type: 'number', width: 120},
];

const rows: GridRowsProp = [
  {
    id : "Jan",
    month: "Jan",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 71610,
    account2: 30690,
    total: 102300,
  },
  {
    id : "Feb",
    month: "Feb",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 73220,
    account2: 36380,
    total: 104600,
  },
  {
    id : "Mar",
    month: "Mar",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 74830,
    account2: 32070,
    total: 106900,
  },
  {
    id : "Apr",
    month: "Apr",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 76440,
    account2: 32760,
    total: 109200,
  },
  {
    id : "May",
    month: "May",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 78050,
    account2: 33450,
    total: 111500,
  },
  {
    id : "Jun",
    month: "Jun",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 79660,
    account2: 34140,
    total: 113800,
  },
  {
    id : "Jul",
    month: "Jul",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 81270,
    account2: 34830,
    total: 116100,
  },
  {
    id : "Aug",
    month: "Aug",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 82880,
    account2: 35520,
    total: 118400,
  },
  {
    id : "Sep",
    month: "Sep",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 84490,
    account2: 36210,
    total: 120700,
  },
  {
    id : "Oct",
    month: "Oct",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 86100,
    account2: 36900,
    total: 123000,
  },
  {
    id : "Nov",
    month: "Nov",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 87710,
    account2: 37590,
    total: 125300,
  },
  {
    id : "Dec",
    month: "Dec",
    employer: 1100,
    employee: 1200,
    total_emp: 2300,
    account1: 89320,
    account2: 38280,
    total: 127600,
  },
];

const columnGroupingModel: GridColumnGroupingModel = [
  {
    groupId: 'Contributions',
    description: 'enter below',
    headerAlign: 'center',
    children: [{ field: 'employer'}, { field: 'employee'},{ field: 'total_emp'},],
  },
  {
    groupId: 'Account Details',
    description: 'auto pop',
    headerAlign: 'center',
    children: [{ field: 'account1' }, { field: 'account2' }, { field: 'total' },],
  },
];

   /*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    <div>
      <Button variant="contained">Hello World</Button>
    </div>

     */

  return (
     <React.Fragment>
     <CssBaseline />
     <Box sx={{ bgcolor: '#efeded'}}>
     <Container fixed>
        <Box sx={{ bgcolor: '#ffffff', height: '100vh' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid xs={12}>
                  <Typography variant="h3" gutterBottom>Employees Provident Fund (EPF) Dividend Calculator</Typography>
                </Grid>
                <Grid xs={12}>
                  <TextField  label="Year" variant="outlined" />
                  <TextField  label="Dividend" variant="filled" />
                </Grid>
                <Grid xs={12}>
                   <Box sx={{ height: 600, width: '100%',  '& .super-app-theme--cell': {
          backgroundColor: '#b3e5fc',
          color: '#03a9f4',
          fontWeight: '600',
        }, }}>
                      <DataGrid experimentalFeatures={{ columnGrouping: true }} rows={rows} columns={columns}  columnGroupingModel={columnGroupingModel} density='compact' hideFooter={true} />
                   </Box>
                </Grid>
              </Grid>
           </Box>
        </Box>
     </Container>
     </Box>
     </React.Fragment>
  );
}

export default App;
