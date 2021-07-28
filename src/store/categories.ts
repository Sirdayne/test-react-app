import {makeAutoObservable} from 'mobx'
import axios from 'axios'
import {Category} from '../models/category'

class Categories {
  categories: Category[] = [] as Category[]

  constructor() {
    makeAutoObservable(this)
  }

  setCategories(categories: string[]) {
    this.categories = categories.map((category, index) => ({
      id: index,
      title: category
    }))
  }

  fetchCategories() {
    axios.get('https://rpback.com/api/games/test_categories?project_id=2').then(({ data }) => {
      this.setCategories(data.categories);
    })
  }
}

export default new Categories()