import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Balance from "../Components/Balance";
import Income from "../Components/Income";
import Expence from "../Components/Expence";
import AddAmount from "../Components/AddAmount";

// import DeviceList from "../Components/DeviceList"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ marginTop: "20px" }}
    >
      <Grid item md={4} xs={12}>
        <Paper className={classes.paper}>
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", color: "#000" }}
          >
            Travel Expence Tracker
          </Typography>
          <Balance title="Your Balance" totalAmt="2000" />
          <Grid container spacing={3}>
            <Income />
            <Expence />
          </Grid>
          <Grid item md={12} style={{ marginTop: "20px" }}>
            <AddAmount/>
          </Grid>
        </Paper>
      </Grid>
      {/* <DeviceList/> */}
    </Grid>
  );
};

export default Layout;
