import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Preferences from "./components/Preferences/Preferences";
import useToken from "./useToken";

function App() {
   //const [token, setToken] = React.useState();
   //const token = getToken();
   const { token, setToken } = useToken();

   if (!token) {
      return <Login setToken={setToken} />;
   }

   return (
      <div className="wrapper">
         <h1>Application</h1>
         <BrowserRouter>
            <Routes>
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/preferences" elmeent={<Preferences />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
