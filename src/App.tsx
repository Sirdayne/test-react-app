import React from 'react';
import './styles/index.sass';
import AppAside from './components/Aside';
import playLogo from './img/play.png';
import {useState, useEffect} from 'react';
import axios from 'axios';

export interface Minute {
  id: number;
  time: number;
}

export interface Video {
  id: number;
  time: number;
  title: string;
}

function App() {

  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    axios.get('https://rpback.com/api/games/test_categories?project_id=2').then(({ data }) => {
      setCategories(data.categories);
    })

    Promise.all([
      axios.get('https://rpback.com/api/games/test_minutes?project_id=2'),
      axios.get('https://rpback.com/api/games/test_blocks?project_id=2')
    ]).then(values => {
      const tempVideos: Video[] = [];
      values[0].data.minutes.forEach((minute: Minute, index: number) => {
        tempVideos.push({...minute, title: values[1].data.blocks[index]})
      })
      setVideos(tempVideos);
    })

  }, [])

  return (
    <div className="app">
        <AppAside/>
        <main className="app-main">
          <div className="app-main__head">
            <h1>Courses</h1>

            <div className="app-main__navigation">
              {categories.map((category) => <span className="app-main__navigation__item">{category}</span>)}
            </div>
          </div>

          <div className="app-main__content">
            {videos.map((video) =>
                <div className="app-main__content__video" key={video.id}>
                  <div className="app-main__content__video__title">{video.title}</div>
                  <div className="app-main__content__video__sub">24 lessons</div>
                  <img src={playLogo} className="app-main__content__video__play-logo" alt="play" />
                  <div className="app-main__content__video__duration">{video.time} min</div>
                </div>
            )}
          </div>
        </main>
    </div>
  );
}

export default App;
