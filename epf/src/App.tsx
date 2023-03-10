import * as React from "react";
//import logo from './logo.svg';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import clsx from "clsx";
//import './App.css';
//import Button from '@mui/material/Button';
//import FormGroup from '@mui/material/FormGroup';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridColumnGroupingModel,
  DataGridProps,
  GridCellParams,
  GridRenderEditCellParams,
  GridValueSetterParams,
  GridCellEditStopParams,
  MuiEvent
} from "@mui/x-data-grid";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { RampRight } from "@mui/icons-material";


type EPF = {
  year: number,
  dividend: number,
  open_acc1: number,
  open_acc2: number,
  total: number,
  month: {
    jan : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    feb : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    mar : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    apr : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    may : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    jun : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    jul : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    aug : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    sep : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    oct : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    nov : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
    dec : { employer : number, employee : number, total_emp : number, account1: number, account2: number, total: number},
  }
}

function App() {

  const ratio = 0.7;

  const initialState : EPF = {
    year: new Date().getFullYear(),
    dividend: 5.35,
    open_acc1: 70000,
    open_acc2: 30000,
    get total () {
      return this.open_acc1 + this.open_acc2;
    },
    month: {
      jan : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee}, 
              get account1() { return initialState.open_acc1 + this.total_emp * ratio},
              get account2() { return initialState.open_acc2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      feb : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee}, 
              get account1() { return initialState.month.jan.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.jan.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      mar : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.feb.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.feb.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      apr : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.mar.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.mar.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      may : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.apr.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.apr.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      jun : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.may.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.may.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      jul : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.jun.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.jun.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      aug : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.jul.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.jul.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      sep : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.aug.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.aug.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      oct : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.sep.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.sep.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      nov : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.oct.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.oct.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
      dec : { employer : 1100, employee : 1200, get total_emp() {  return this.employer + this.employee},
              get account1() { return initialState.month.nov.account1 + this.total_emp * ratio},
              get account2() { return initialState.month.nov.account2 + this.total_emp * (1-ratio)},
              get total() { return this.account1 + this.account2}
            },
    }
  };

  const [state, setState] = React.useState(initialState);

  const rows1: GridRowsProp = [
    {
      id: "Jan",
      month: "Jan",
      employer: state.month.jan.employer,
      employee: state.month.jan.employee,
      total_emp: state.month.jan.total_emp,
      account1: state.month.jan.account1,
      account2: state.month.jan.account2,
      total: state.month.jan.total,
    },
    {
      id: "Feb",
      month: "Feb",
      employer: state.month.feb.employer,
      employee: state.month.feb.employee,
      total_emp: state.month.feb.total_emp,
      account1: state.month.feb.account1,
      account2: state.month.feb.account2,
      total: state.month.feb.total,
    },
    {
      id: "Mar",
      month: "Mar",
      employer: state.month.mar.employer,
      employee: state.month.mar.employee,
      total_emp: state.month.mar.total_emp,
      account1: state.month.mar.account1,
      account2: state.month.mar.account2,
      total: state.month.mar.total,
    },
    {
      id: "Apr",
      month: "Apr",
      employer: state.month.apr.employer,
      employee: state.month.apr.employee,
      total_emp: state.month.apr.total_emp,
      account1: state.month.apr.account1,
      account2: state.month.apr.account2,
      total: state.month.apr.total,
    },
    {
      id: "May",
      month: "May",
      employer: state.month.may.employer,
      employee: state.month.may.employee,
      total_emp: state.month.may.total_emp,
      account1: state.month.may.account1,
      account2: state.month.may.account2,
      total: state.month.may.total,
    },
    {
      id: "Jun",
      month: "Jun",
      employer: state.month.jun.employer,
      employee: state.month.jun.employee,
      total_emp: state.month.jun.total_emp,
      account1: state.month.jun.account1,
      account2: state.month.jun.account2,
      total: state.month.jun.total,
    },
    {
      id: "Jul",
      month: "Jul",
      employer: state.month.jul.employer,
      employee: state.month.jul.employee,
      total_emp: state.month.jul.total_emp,
      account1: state.month.jul.account1,
      account2: state.month.jul.account2,
      total: state.month.jul.total,
    },
    {
      id: "Aug",
      month: "Aug",
      employer: state.month.aug.employer,
      employee: state.month.aug.employee,
      total_emp: state.month.aug.total_emp,
      account1: state.month.aug.account1,
      account2: state.month.aug.account2,
      total: state.month.aug.total,
    },
    {
      id: "Sep",
      month: "Sep",
      employer: state.month.sep.employer,
      employee: state.month.sep.employee,
      total_emp: state.month.sep.total_emp,
      account1: state.month.sep.account1,
      account2: state.month.sep.account2,
      total: state.month.sep.total,
    },
    {
      id: "Oct",
      month: "Oct",
      employer: state.month.oct.employer,
      employee: state.month.oct.employee,
      total_emp: state.month.oct.total_emp,
      account1: state.month.oct.account1,
      account2: state.month.oct.account2,
      total: state.month.oct.total,
    },
    {
      id: "Nov",
      month: "Nov",
      employer: state.month.nov.employer,
      employee: state.month.nov.employee,
      total_emp: state.month.nov.total_emp,
      account1: state.month.nov.account1,
      account2: state.month.nov.account2,
      total: state.month.nov.total,
    },
    {
      id: "Dec",
      month: "Dec",
      employer: state.month.dec.employer,
      employee: state.month.dec.employee,
      total_emp: state.month.dec.total_emp,
      account1: state.month.dec.account1,
      account2: state.month.dec.account2,
      total: state.month.dec.total,
    },
  ];

  type Item = typeof rows1[number];

  interface OpeningBalanceHeader {
    id: "Opening Balance";
    label: string;
    account1: number;
    account2: number;
    total: number;
  }

  interface DividenHeader {
    id: "Dividend Received for Year";
    label: string;
    account1: number;
    account2: number;
    total: number;
  }

  interface BalanceHeader {
    id: "Balance as of 31st Dec";
    label: string;
    account1: number;
    account2: number;
    total: number;
  }

  type Row = Item | OpeningBalanceHeader | DividenHeader | BalanceHeader;

  const rows: Row[] = [
    {
      id: "Opening Balance",
      label: "Opening Balance",
      account1: state.open_acc1,
      account2: state.open_acc2,
      total: state.total,
    },
    ...rows1,
    {
      id: "Dividend Received for Year",
      label: "Dividend Received for Year " + state.year,
      account1: 4854.18,
      account2: 2080.36,
      total: 6934.55,
    },
    {
      id: "Balance as of 31st Dec",
      label: "Balance as of 31st Dec " + state.year,
      account1: 94174.18,
      account2: 40360.36,
      total: 134534.55,
    },
  ];

  const columns: GridColDef<Row>[] = [
    {
      field: "month",
      headerName: "Month",
      flex: 1,
      colSpan: ({ row }) => {
        if (
          row.id === "Opening Balance" ||
          row.id === "Dividend Received for Year" ||
          row.id === "Balance as of 31st Dec"
        ) {
          return 4;
        }
        return undefined;
      },
      valueGetter: ({ value, row }) => {
        if (
          row.id === "Opening Balance" ||
          row.id === "Dividend Received for Year" ||
          row.id === "Balance as of 31st Dec"
        ) {
          return row.label;
        }
        return value;
      },
      sortable: false,
    },
    {
      field: "employer",
      headerName: "Employer (RM)",
      type: "number",
      editable: true,
      width: 120,
      cellClassName: "super-app-theme--cell",
      flex: 1,
      sortable: false,
    },
    {
      field: "employee",
      headerName: "Employee (RM)",
      type: "number",
      editable: true,
      width: 120,
      cellClassName: "super-app-theme--cell",
      flex: 1,
      sortable: false,
    },
    {
      field: "total_emp",
      headerName: "Total (RM)",
      type: "number",
      width: 120,
      flex: 1,
      sortable: false,
    },
    {
      field: "account1",
      headerName: "Account 1 (RM)",
      type: "number",
      width: 120,
      flex: 1,
      editable: true,
      cellClassName: (params: GridCellParams<Row>) => {
        if (params.id == "Opening Balance") {
          return "super-app-theme--cell";
        }

        return "";
      },
      sortable: false,
    },
    {
      field: "account2",
      headerName: "Account 2 (RM)",
      type: "number",
      width: 120,
      flex: 1,
      editable: true,
      cellClassName: (params: GridCellParams<Row>) => {
        if (params.id == "Opening Balance") {
          return "super-app-theme--cell";
        }

        return "";
      },
      sortable: false,
    },
    {
      field: "total",
      headerName: "Total (RM)",
      type: "number",
      width: 120,
      flex: 1,
      sortable: false,
    },
  ];

  const columnGroupingModel: GridColumnGroupingModel = [
    {
      groupId: "Contributions",
      description: "enter below",
      headerAlign: "center",
      children: [
        { field: "employer" },
        { field: "employee" },
        { field: "total_emp" },
      ],
    },
    {
      groupId: "Account Details",
      description: "auto pop",
      headerAlign: "center",
      children: [
        { field: "account1" },
        { field: "account2" },
        { field: "total" },
      ],
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

  const getCellClassName: DataGridProps["getCellClassName"] = ({
    row,
    field,
  }) => {
    if (
      row.id === "Opening Balance" ||
      row.id === "Dividend Received for Year" ||
      row.id === "Balance as of 31st Dec"
    ) {
      if (field === "month") {
        return "bold";
      }
    }
    return "";
  };

  const processRowUpdate = (newRow : any, oldRow : any) => {
    // console.log(JSON.stringify(newRow));
    // console.log(JSON.stringify(oldRow));

    const newState = {...state};


    const { id, month, ...new1Row} = newRow;

    switch (newRow.id) {
      case 'Jan':    
        newState.month.jan = new1Row;
        break;
      case 'Feb':
        newState.month.feb = new1Row;
        break;
      case 'Mar':
        newState.month.mar = new1Row;
        break;
      case 'Apr':
        newState.month.apr = new1Row;
        break;
      case 'May':
        newState.month.may = new1Row;
        break;
      case 'Jun':
        newState.month.jun = new1Row;
        break;
      case 'Jul':
        newState.month.jul = new1Row;
        break;
      case 'Aug':
        newState.month.aug = new1Row;
        break;
      case 'Sep':
        newState.month.sep = new1Row;
        break;
      case 'Oct':
        newState.month.oct = new1Row;
        break;
      case 'Nov':
        newState.month.nov = new1Row;
        break;
      case 'Dec':
        newState.month.dec = new1Row;
        break;
    }
    setState(newState);

    console.log(state);

    return newRow;
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ bgcolor: "#efeded" }}>
        <Container fixed>
          <Box sx={{ bgcolor: "#ffffff", height: "100vh" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography variant="h3" gutterBottom>
                    Employees Provident Fund (EPF) Dividend Calculator
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    sx={{ marginRight: 1 }}
                    label="Year"
                    variant="outlined"
                    value={state.year}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setState({...state, year: parseInt(ev.currentTarget.value)})}
                  />
                  <TextField
                    type="number"
                    sx={{ marginLeft: 1 }}
                    label="Dividend"
                    variant="filled"
                    value={state.dividend}
                    onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setState({...state, dividend: +ev.currentTarget.value})}
                  />
                </Grid>
                <Grid xs={12}>
                  <Box
                    sx={{
                      width: "100%",
                      "& .super-app-theme--cell": {
                        backgroundColor: "#b3e5fc",
                        color: "#03a9f4",
                        fontWeight: "600",
                      },
                      "& .bold": {
                        fontWeight: 800,
                        justifyContent: "flex-end !important",
                      },
                    }}
                  >
                    <DataGrid
                      sx={{ m: 5 }}
                      experimentalFeatures={{ columnGrouping: true }}
                      rows={rows}
                      columns={columns}
                      columnGroupingModel={columnGroupingModel}
                      getCellClassName={getCellClassName}
                      density="compact"
                      showColumnVerticalBorder
                      isCellEditable={(params) => 
                          params.row.id == "Opening Balance" ||
                          params.field == "employer" ||
                          params.field == "employee"
                      }
                      processRowUpdate = {processRowUpdate}
                      autoHeight
                      hideFooter
                    />
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
