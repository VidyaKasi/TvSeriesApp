import React from 'react';
import SingleSeries from '../../containers/SingleSeries';
import {Switch, Route}  from 'react-router-dom';
import Series from '../../containers/Series/index.js';
const Main = (props) => (
    <Switch>
        <Route exact path='/' component={Series} />
        <Route path="/series/:id" component={SingleSeries} />
    </Switch>
)

export default Main;