import {makeAutoObservable} from 'mobx';
import axios from 'axios';
import {Video} from '../models/video';
import {Minute} from '../models/minute';

class Videos {
  videos = [] as Video[];

  constructor() {
    makeAutoObservable(this)
  }

  setVideos(videos: Video[]) {
    this.videos = videos
  }

  fetchVideos() {
    Promise.all([
      axios.get('https://rpback.com/api/games/test_minutes?project_id=2'),
      axios.get('https://rpback.com/api/games/test_blocks?project_id=2')
    ]).then(values => {
      const tempVideos: Video[] = [];
      values[0].data.minutes.forEach((minute: Minute, index: number) => {
        tempVideos.push({...minute, title: values[1].data.blocks[index]})
      })
      this.setVideos(tempVideos);
    })
  }
}

export default new Videos();