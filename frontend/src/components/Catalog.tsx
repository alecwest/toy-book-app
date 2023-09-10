import Grid from "@mui/material/Unstable_Grid2";
import { BookCard } from ".";
import { Box } from "@mui/material";

const Catalog = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid lg={6} xs={12}>
          <BookCard></BookCard>
        </Grid>
        <Grid lg={6} xs={12}>
          <BookCard></BookCard>
        </Grid>
        <Grid lg={6} xs={12}>
          <BookCard></BookCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Catalog;
