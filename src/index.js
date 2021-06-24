import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import BasePage from './BasePage';

ReactDOM.render(
  <BrowserRouter>
    <BasePage />
  </BrowserRouter>,
  document.getElementById('root')
);


