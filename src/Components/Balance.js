import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const Balance = ({ title, totalAmt }) => {
  return (
    <Box style={{ marginTop: "10px", borderTop: "1px #eee solid", textAlign:"center" }}>
      <Box style={{ marginTop: "20px", marginBottom: "20px"  }}>
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", fontSize: "16px" }}
        >
          {title}
        </Typography>
        <Typography variant="h5" style={{ fontSize: "30px" }}>
          {totalAmt}
        </Typography>
      </Box>
    </Box>
  );
};

export default Balance;
