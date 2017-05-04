import { render } from 'react-dom';
import React from 'react';
import store from './src/Frontend/stores/app.store'
import Container from './src/Frontend/Components/Container'
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <Container/>
    </Provider>
    ,
    document.getElementById('app')
);