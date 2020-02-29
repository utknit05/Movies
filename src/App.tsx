import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';

const App = () => {
    return (
        <Provider store={createStore()}>
            <div>Hello</div>
        </Provider>
    )
}

export default App;
