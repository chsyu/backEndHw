export default function(state = null, action) {
  switch(action.type) {
  case 'TWO_SELECTED':
    return action.payload;
  }
  

  return state;
}