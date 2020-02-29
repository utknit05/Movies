import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Header from './components/Header';

const App = () => {
    return (
        <Provider store={createStore()}>
            <Header/>
        </Provider>
    )
}

export default App;
