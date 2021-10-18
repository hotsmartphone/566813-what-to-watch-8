import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MainMovieCard = {
  title: 'The Grand Budapest Hotel',
  genre:  'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title  = {MainMovieCard.title}
      genre  = {MainMovieCard.genre}
      year  = {MainMovieCard.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
