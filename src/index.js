import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div>
    <h1>Hola, Soy Dan</h1>
    <p>Soy ingeniero frontend</p>
  </div>
);

const container = document.getElementById('app');

ReactDOM.render(element, container);
