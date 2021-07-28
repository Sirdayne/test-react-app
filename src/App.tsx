import React from 'react';
import './styles/index.sass';
import AppAside from './components/Aside';
import playLogo from './img/play.png';
import {useState, useEffect} from 'react';
import axios from 'axios';

export interface VideoI {
  id: number;
  time: number;
}

function App() {

  const [categories, setCategories] = useState([]);
  const [minutes, setMinutes] = useState<VideoI[]>([]);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios.get('https://rpback.com/api/games/test_categories?project_id=2').then(({ data }) => {
      setCategories(data.categories);
    })

    axios.get('https://rpback.com/api/games/test_minutes?project_id=2').then(({ data }) => {
      setMinutes(data.minutes);
    })

    axios.get('https://rpback.com/api/games/test_blocks?project_id=2').then(({ data }) => {
      setBlocks(data.blocks);
      console.log(blocks);
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
            {minutes.map((minute) =>
                <div className="app-main__content__video" key={minute.id}>
                  <div className="app-main__content__video__title">Illustration</div>
                  <div className="app-main__content__video__sub">24 lessons</div>
                  <img src={playLogo} className="app-main__content__video__play-logo" alt="play" />
                  <div className="app-main__content__video__duration">{minute.time} min</div>
                </div>
            )}

            <div className="app-main__content__video app-main__content__video_building">
              <div className="app-main__content__video__title">Graphic design</div>
              <div className="app-main__content__video__sub">30 lessons</div>
              <img src={playLogo} className="app-main__content__video__play-logo" alt="play" />
              <div className="app-main__content__video__duration">236 min</div>
            </div>
          </div>
        </main>
    </div>
  );
}

export default App;
