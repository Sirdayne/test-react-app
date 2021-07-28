import React, {useEffect} from 'react';
import videos from '../store/videos';
import playLogo from '../img/play.png';
import {observer} from 'mobx-react-lite';

const Videos = observer(() => {
  useEffect(() => {
    videos.fetchVideos();
  }, [])

  return (
      <div className="app-main__content">
        {videos.videos.map((video) =>
            <div className="app-main__content__video" key={video.id}>
              <div className="app-main__content__video__title">{video.title}</div>
              <div className="app-main__content__video__sub">24 lessons</div>
              <img src={playLogo} className="app-main__content__video__play-logo" alt="play" />
              <div className="app-main__content__video__duration">{video.time} min</div>
            </div>
        )}
      </div>
  );
});

export default Videos;
