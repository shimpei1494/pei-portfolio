import { Stack } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";

const  opts : YouTubeProps [ 'opts' ]  =  { 
  height : '360' , 
  width : '640' ,
} ;

export function SnowYoutube() {

  return (
    <Stack alignItems='center' my={2}>
      <YouTube videoId="aFjI7OqTL70" opts={opts} />
    </Stack>
  );
}