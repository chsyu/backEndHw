import React from 'react';
import { Route,IndexRoute } from 'react-router';
import Main from './components/main'
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import NewImg from './components/new_img';

import App from './components/app';
import Work from './components/work';
import Upload from './components/upload';


export default (
  <Route path="/" component={App}>
  <IndexRoute component={Main} />
  <Route path="upload" component={Upload} />
  <Route path="upload/newimg" component={NewImg} />

    <Route path="work" component={Work} />
  </Route>
);
