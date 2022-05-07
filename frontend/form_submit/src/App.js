import { MaterialUIFormSubmit } from "./components/MaterialUIFormSubmit";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  /*
  palette: {
    primary: {
      main: red[500],
    },
  },
  */
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <MaterialUIFormSubmit
        formName="Sample Form Submit"
        formDescription="This is sample form using Material UI."
      />
    </ThemeProvider>
    </div>
  );
}

export default App;
