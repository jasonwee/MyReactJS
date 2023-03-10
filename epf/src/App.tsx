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
    jan : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    feb : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    mar : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    apr : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    may : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    jun : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    jul : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    aug : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    sep : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    oct : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    nov : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
    dec : { empr : number, empe : number, total_emp : number, acc1: number, acc2: number, total: number},
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
      jan : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe}, 
              get acc1() { return initialState.open_acc1 + this.total_emp * ratio},
              get acc2() { return initialState.open_acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      feb : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe}, 
              get acc1() { return initialState.month.jan.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.jan.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      mar : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.feb.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.feb.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      apr : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.mar.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.mar.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      may : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.apr.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.apr.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      jun : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.may.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.may.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      jul : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.jun.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.jun.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      aug : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.jul.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.jul.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      sep : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.aug.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.aug.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      oct : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.sep.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.sep.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      nov : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.oct.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.oct.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
      dec : { empr : 1100, empe : 1200, get total_emp() {  return this.empr + this.empe},
              get acc1() { return initialState.month.nov.acc1 + this.total_emp * ratio},
              get acc2() { return initialState.month.nov.acc2 + this.total_emp * (1-ratio)},
              get total() { return this.acc1 + this.acc2}
            },
    }
  };

  const [state, setState] = React.useState(initialState);

  const rows1: GridRowsProp = [
    {
      id: "Jan",
      month: "Jan",
      employer: state.month.jan.empr,
      employee: state.month.jan.empe,
      total_emp: state.month.jan.total_emp,
      account1: state.month.jan.acc1,
      account2: state.month.jan.acc2,
      total: state.month.jan.total,
    },
    {
      id: "Feb",
      month: "Feb",
      employer: state.month.feb.empr,
      employee: state.month.feb.empe,
      total_emp: state.month.feb.total_emp,
      account1: state.month.feb.acc1,
      account2: state.month.feb.acc2,
      total: state.month.feb.total,
    },
    {
      id: "Mar",
      month: "Mar",
      employer: state.month.mar.empr,
      employee: state.month.mar.empe,
      total_emp: state.month.mar.total_emp,
      account1: state.month.mar.acc1,
      account2: state.month.mar.acc2,
      total: state.month.mar.total,
    },
    {
      id: "Apr",
      month: "Apr",
      employer: state.month.apr.empr,
      employee: state.month.apr.empe,
      total_emp: state.month.apr.total_emp,
      account1: state.month.apr.acc1,
      account2: state.month.apr.acc2,
      total: state.month.apr.total,
    },
    {
      id: "May",
      month: "May",
      employer: state.month.may.empr,
      employee: state.month.may.empe,
      total_emp: state.month.may.total_emp,
      account1: state.month.may.acc1,
      account2: state.month.may.acc2,
      total: state.month.may.total,
    },
    {
      id: "Jun",
      month: "Jun",
      employer: state.month.jun.empr,
      employee: state.month.jun.empe,
      total_emp: state.month.jun.total_emp,
      account1: state.month.jun.acc1,
      account2: state.month.jun.acc2,
      total: state.month.jun.total,
    },
    {
      id: "Jul",
      month: "Jul",
      employer: state.month.jul.empr,
      employee: state.month.jul.empe,
      total_emp: state.month.jul.total_emp,
      account1: state.month.jul.acc1,
      account2: state.month.jul.acc2,
      total: state.month.jul.total,
    },
    {
      id: "Aug",
      month: "Aug",
      employer: state.month.aug.empr,
      employee: state.month.aug.empe,
      total_emp: state.month.aug.total_emp,
      account1: state.month.aug.acc1,
      account2: state.month.aug.acc2,
      total: state.month.aug.total,
    },
    {
      id: "Sep",
      month: "Sep",
      employer: state.month.sep.empr,
      employee: state.month.sep.empe,
      total_emp: state.month.sep.total_emp,
      account1: state.month.sep.acc1,
      account2: state.month.sep.acc2,
      total: state.month.sep.total,
    },
    {
      id: "Oct",
      month: "Oct",
      employer: state.month.oct.empr,
      employee: state.month.oct.empe,
      total_emp: state.month.oct.total_emp,
      account1: state.month.oct.acc1,
      account2: state.month.oct.acc2,
      total: state.month.oct.total,
    },
    {
      id: "Nov",
      month: "Nov",
      employer: state.month.nov.empr,
      employee: state.month.nov.empe,
      total_emp: state.month.nov.total_emp,
      account1: state.month.nov.acc1,
      account2: state.month.nov.acc2,
      total: state.month.nov.total,
    },
    {
      id: "Dec",
      month: "Dec",
      employer: state.month.dec.empr,
      employee: state.month.dec.empe,
      total_emp: state.month.dec.total_emp,
      account1: state.month.dec.acc1,
      account2: state.month.dec.acc2,
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
    },
    {
      field: "employer",
      headerName: "Employer (RM)",
      type: "number",
      editable: true,
      width: 120,
      cellClassName: "super-app-theme--cell",
      flex: 1,
    },
    {
      field: "employee",
      headerName: "Employee (RM)",
      type: "number",
      editable: true,
      width: 120,
      cellClassName: "super-app-theme--cell",
      flex: 1,
    },
    {
      field: "total_emp",
      headerName: "Total (RM)",
      type: "number",
      width: 120,
      flex: 1,
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
    },
    {
      field: "total",
      headerName: "Total (RM)",
      type: "number",
      width: 120,
      flex: 1,
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

  const processRowUpdate = (newRow : Row, oldRow : Row) => {
    // console.log(newRow);
    // console.log(oldRow);

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
