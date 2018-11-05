import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStackNavigator } from 'react-navigation';

import rootSaga from './redux/sagas/rootSaga';
import allReducers from './redux/reducers/allReducers';
import MovieContainer from './redux/containers/MovieContainer';
import LoginComponent from './components/Login/Login.component';

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginComponent,
        navigationOptions: { header: null },
    },
    Movie: {
        screen: MovieContainer,
        navigationOptions: { header: null },
    }
},
    {
        initialRouteName: 'Login',
    }
);

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
);
sagaMiddleware.run(rootSaga);

export default App;