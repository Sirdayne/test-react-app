import {makeAutoObservable} from 'mobx';
import axios from 'axios';

class Categories {
  categories: string[] = [];

  constructor() {
    makeAutoObservable(this)
  }

  setCategories(categories: string[]) {
    this.categories = categories
  }

  fetchCategories() {
    axios.get('https://rpback.com/api/games/test_categories?project_id=2').then(({ data }) => {
      this.setCategories(data.categories);
    })
  }
}

export default new Categories();