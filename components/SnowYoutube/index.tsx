import { Stack } from "@mui/material";
import YouTube, { YouTubeProps } from "react-youtube";

const  opts : YouTubeProps [ 'opts' ]  =  { 
  height : '360' , 
  width : '640' ,
} ;

export function SnowYoutube(props: {youtubeId: string}) {

  return (
    <Stack alignItems='center' my={2}>
      {/* youtubeIDには各動画固有のIDが入る */}
      <YouTube videoId={props.youtubeId} opts={opts} />
    </Stack>
  );
}