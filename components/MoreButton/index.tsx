import { ReadMore } from "@mui/icons-material";
import { Fab } from "@mui/material";
import NextLink from "next/link";

type Props = {
  url: string
};

export function MoreButton(props: Props) {

  return (
    <NextLink href={props.url}>
      <Fab variant="extended" size="small" color="secondary">
        <ReadMore sx={{ mr: 1 }}/>
        MORE
      </Fab>
    </NextLink>
  );
}