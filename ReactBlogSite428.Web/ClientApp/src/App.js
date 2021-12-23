import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './pages/Home';
import ViewPost from './pages/ViewPost';
import Admin from './pages/Admin';
import Layout from './Layout';
import MostRecent from './pages/MostRecent';


export default class App extends Component {
    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/ViewPost/:id' component={ViewPost} />
                <Route exact path='/Admin' component={Admin} />
                <Route exact path='/MostRecent' component={MostRecent} />
            </Layout>
        );
    }
}