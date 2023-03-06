import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {
  //   console.log(videos);

  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      flex="1"
      justifyContent="center"
      gap={2}
      margin="auto"
      // border="1px solid red"
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard ChannelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
