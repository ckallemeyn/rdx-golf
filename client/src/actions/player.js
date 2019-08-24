export const ADD_PLAYER = 'ADD_PLAYER';

function addPlayer(player) {
  return {
    type: ADD_PLAYER,
    player
  }
}

export default function handleAddPlayer() {
  return (dispatch) => {
    console.log('made it to the inner func');
    fetch('/player')
      .then((player) => player.json())
      .then((data) => {
        console.log('found the data', data);
        dispatch(addPlayer(data));
      })
      .catch((err) => console.error('unable to retrive player', err));
  }
}