import React, { useEffect } from 'react';
import { UPDATE_GAMES } from '../../utils/actions';
import { useStoreContext } from '../../utils/GlobalState';
import GameItem from '../GameItem';
import spinner from '../../assets/spinner.gif';
import { useQuery } from '@apollo/client';
import { QUERY_GAMES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function GameList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_GAMES);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_GAMES,
        games: data.games,
      });
      data.games.forEach((game) => {
        idbPromise('games', 'put', game);
      });
    } else if (!loading) {
      idbPromise('games', 'get').then((games) => {
        dispatch({
          type: UPDATE_GAMES,
          games: games,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterGames() {
    if (!currentCategory) {
      return state.games;
    }

    return state.games.filter(
      (game) => game.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      {/* <h2>Our Games:</h2> */}
      {state.games.length ? (
        <div className="flex-row">
          {filterGames().map((game) => (
            <GameItem
              key={game._id}
              _id={game._id}
              image={game.image}
              name={game.name}
              price={game.price}
              quantity={game.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any games yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default GameList;
