import Grid from "@material-ui/core/Grid";
import {Box} from "@material-ui/core";

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
	 </Grid>
      </Grid>
   </>
   );
}

export default Home;
