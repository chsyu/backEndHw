import React from 'react';
import { Route,IndexRoute } from 'react-router';
import Main from './components/main'
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import App from './components/app';
import Work from './components/work'


export default (
  <Route path="/" component={App}>
  <IndexRoute component={Main} />
  <Route path="posts/new" component={PostsNew} />
    <Route path="work" component={Work} />
  </Route>
);
