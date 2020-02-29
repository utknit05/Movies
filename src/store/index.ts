import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../modules/reducer';

const logger = createLogger({ diff: true, collapsed: true })

export default () => {
    const middleware = [thunk, logger];

    const enhancer: any[] = [];

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            ...enhancer
        )
    )
    return store;
};
