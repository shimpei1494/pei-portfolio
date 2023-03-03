import { Typography } from "@mui/material";

export function PageTitle(props: {title: string}) {

  return (
    <Typography variant="h2" align='center' sx={{fontWeight: 'bold', fontStyle: 'italic'}} mb={2}>
      {props.title}
    </Typography>
  );
}