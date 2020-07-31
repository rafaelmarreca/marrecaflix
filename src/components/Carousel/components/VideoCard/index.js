import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';
import { ResponsiveIframe } from '../../../ResponsiveIframe';
import Spinner from '../../../Spinner';
import { VideoCardContainer, VideoCardWrapper } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const [isHovering, setIsHovering] = useState(false);

  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL,
  )}/hqdefault.jpg`;

  const getEmbedVideo = () => {
    setIsHovering(true);
  };

  const delayPreview = useCallback(debounce(getEmbedVideo, 1500), []);

  const stopPreview = () => {
    delayPreview.cancel();
    setIsHovering(false);
  };

  return (
    <>
      <VideoCardWrapper onMouseEnter={delayPreview} onMouseLeave={stopPreview}>
        {(!isHovering && (
          <VideoCardContainer
            url={image}
            as="a"
            href={videoURL}
            target="_blank"
            style={{ borderColor: categoryColor || 'red' }}
            title={videoTitle}
            hasLoading
          >
            <Spinner sizeBorder={4} />

          </VideoCardContainer>
        )) || (
        <VideoCardContainer style={{ borderColor: categoryColor || 'red' }}>
          <ResponsiveIframe
            title="Titulo do Iframe"
            src={`https://www.youtube.com/embed/${getYouTubeId(
              videoURL,
            )}?autoplay=1&mute=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoCardContainer>
        )}
      </VideoCardWrapper>
    </>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default VideoCard;
