import React from 'react';
import './styles/index.sass';
import AppAside from './components/Aside';
import AppCategories from './components/Categories';
import AppVideos from './components/Videos';

function App() {
  return (
    <div className="app">
        <AppAside/>
        <main className="app-main">
          <AppCategories/>
          <AppVideos/>
        </main>
    </div>
  );
}

export default App;
