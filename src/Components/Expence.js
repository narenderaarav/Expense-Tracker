import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const Expence = () => {
  return (
    <Grid item xs={6} md={6}>
      <Box
        style={{
          border: "1px solid",
          borderColor: "#bcb3f9",
          backgroundColor: "#e3e0fc",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Grid style={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            style={{
              borderRadius: "100%",
              width: "40px",
              height: "40px",
              backgroundColor: "#bcb3f9",
            }}
          >
            1
          </Box>
          <Box>
            <Typography style={{ fontSize: "13px" }}>Your Expence</Typography>
            <Typography style={{ fontSize: "18px", fontWeight: "bold" }}>
              20000
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
};

export default Expence;
