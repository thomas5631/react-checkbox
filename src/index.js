import React from 'react';
import ReactDOM from 'react-dom';

import { ExampleApp } from './components/ExampleApp';

import './styles.css';

function App() {
  return (
    <div className="App">
      <ExampleApp />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
