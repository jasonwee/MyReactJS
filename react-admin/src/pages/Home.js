import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from "recharts";

import "../App.css";

const data = [
  {
    name: "Jan",
    Chargebacks: 4000,
    Transactions: 2400,
    USD: 2400,
  },
  {
    name: "Feb",
    Chargebacks: 3000,
    Transactions: 1398,
    USD: 2210,
  },
  {
    name: "Mar",
    Chargebacks: 2000,
    Transactions: 9800,
    USD: 2290,
  },
  {
    name: "Apr",
    Chargebacks: 2780,
    Transactions: 3908,
    USD: 2000,
  },
  {
    name: "May",
    Chargebacks: 1890,
    Transactions: 4800,
    USD: 2181,
  },
  {
    name: "Jun",
    Chargebacks: 2390,
    Transactions: 3800,
    USD: 2500,
  },
  {
    name: "Jul",
    Chargebacks: 3490,
    Transactions: 4300,
    USD: 2100,
  },
  {
    name: "Aug",
    Chargebacks: 3490,
    Transactions: 4300,
    USD: 2100,
  },
  {
    name: "Sep",
    Chargebacks: 3490,
    Transactions: 4300,
    USD: 2100,
  },
];



function Home() {


   return (
   <>
      {/* Business details */}

      {/* Settings chart */}

      <Grid container justifyContent="center" alignItems="center">

        <Grid item xs={11}>
           {/*Padding on the top*/}
           <Box m="5rem" />
        </Grid>

        <Grid item xs={12} >
          <h4 className="chart-label">Today Payments</h4>
          <BarChart width={1000} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} barSize={30}>
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Transactions" fill="#8884d8" background={{ fill: "#eee" }}/>
          </BarChart>
        </Grid>

        <Grid item xs={4}>
          <h4 className="chart-label">Payments</h4>
          <BarChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5,}} barSize={20}>
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Transactions" fill="#8884d8" background={{ fill: "#eee" }}/>
          </BarChart>
        </Grid>

        <Grid item xs={4}>
          <h4 className="chart-label">Chargebacks</h4>
          <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}} barSize={20}>
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="Chargebacks" fill="#8884d8" background={{ fill: "#eee" }}/>
          </BarChart>
        </Grid>

        <Grid item xs={4}>
          <h4 className="chart-label">Net volume from sales</h4>
          <BarChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} barSize={20}>
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="USD" fill="#8884d8" background={{ fill: "#eee" }} />
          </BarChart>
        </Grid>
      </Grid>
   </>
   );
}

export default Home;
