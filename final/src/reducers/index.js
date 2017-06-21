import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import WorksReducer from './reducer_works';
import ActiveWork from './reducer_active_work';

const rootReducer = combineReducers({
  posts:PostsReducer,
  form: formReducer,
  works: WorksReducer,
  activeWork: ActiveWork
});

export default rootReducer;
