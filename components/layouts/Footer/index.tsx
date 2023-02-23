import { Box, Typography } from "@mui/material";

export function Footer() {

  return (
    <Box sx={{backgroundColor: 'primary.main', display: 'flex', justifyContent: 'center', alignItems: 'center'}} height={50} mt={10}>
      <Typography color='white'>
        © 2023 Peishim.
      </Typography>
    </Box>
  );
}