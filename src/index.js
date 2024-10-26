import React from 'react';
// import ReactDOM from 'react-dom';
import { HerosApp } from './HerosApp';
import { render } from '@testing-library/react';


render(
  <HerosApp/>,
  document.getElementById("root")
);
