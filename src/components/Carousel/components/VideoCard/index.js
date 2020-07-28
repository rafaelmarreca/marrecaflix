import React from "react";
import { VideoCardContainer } from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  return (
    <>
      {/* <VideoCardContainerDiv style={{ borderColor: categoryColor || "red" }}>
        <ResponsiveIframe
          title="Titulo do Iframe"
          src={`https://www.youtube.com/embed/${getYouTubeId(
            videoURL
          )}?autoplay=0&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoCardContainerDiv> */}
      <VideoCardContainer
        url={image}
        href={videoURL}
        target="_blank"
        style={{ borderColor: categoryColor || "red" }}
        title={videoTitle}
      />
    </>
  );
}

export default VideoCard;
