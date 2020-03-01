import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Header from './components/Header';
import CardList from './components/CardList';
import Filter from './components/Filter';

const App = () => {
  return (
      <Provider store={createStore()}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <Header/>
            <CardList/>
          </div>
          <Filter/>
        </div>
      </Provider>
  )
}

export default App;
