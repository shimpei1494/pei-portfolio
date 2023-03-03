import { Typography } from "@mui/material";

export function TopPageSubTitle(props: {subtitle: string}) {

  return (
    <Typography variant="h3" sx={{fontWeight: 'bold', fontStyle: 'italic'}}>
      {props.subtitle}
    </Typography>
  );
}