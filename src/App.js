import React from 'react';
import { Provider } from 'react-redux';
import store from "./store";
import './App.css';
import Luckysheet from './component/Luckysheet';

function App() {
  return (
      <Provider store={store}>
          <div className="App">
              <header className="App-header">
                  <Luckysheet/>
              </header>
          </div>
      </Provider>
  );
}

export default App;
