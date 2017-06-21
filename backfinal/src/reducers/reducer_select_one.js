export default function(state = null, action) {
  switch(action.type) {
  case 'ONE_SELECTED':
    return action.payload;
  }

  return state;
}