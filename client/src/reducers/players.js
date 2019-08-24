import { ADD_PLAYER } from '../actions/player';

export default function players(state = {}, action) {
  switch(action.type) {
    case ADD_PLAYER :
      return {
        ...state,
        player: action.player
      }
    default:
      return state;
  }
}