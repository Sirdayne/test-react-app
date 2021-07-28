import React, {useEffect} from 'react';
import categories from '../store/categories';
import {observer} from 'mobx-react-lite';

const Categories = observer(() => {
  useEffect(() => {
    categories.fetchCategories();
  }, [])

  return (
      <div className="app-main__head">
        <h1>Courses</h1>
        <div className="app-main__navigation">
          {categories.categories.map((category) => <span className="app-main__navigation__item" key={category.id}>{category.title}</span>)}
        </div>
      </div>
  );
});

export default Categories;
