import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import WorksReducer from './reducer_works';
import ActiveWork from './reducer_active_work';
import SelectOne from './reducer_select_one';
import SelectTwo from './reducer_select_two';
import OneWorkReducer from './reducer_oneworks';
import TwoWorkReducer from './reducer_twoworks';
import WorkMenu from './reducer_work_menu';

const rootReducer = combineReducers({
  selectone:SelectOne,
  selecttwo:SelectTwo,
  posts:PostsReducer,
  form: formReducer,
  workmenu:WorkMenu,
  twoworks:TwoWorkReducer,
  oneworks:OneWorkReducer,
  activeWork: ActiveWork
});

export default rootReducer;
