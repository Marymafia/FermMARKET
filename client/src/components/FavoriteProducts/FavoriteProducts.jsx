import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBestAC } from '../../redux/actions/bestAction';
import OneFavorite from './OneFavorite';

function FavoriteProducts() {
  // store = {best:[], user:{}, post:[]}
  const best = useSelector((store) => store.best);
  // не используем деструктуризацию, а подписываемся только на один слайс стора (best)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3000/api/addBest').then((response) => response.json()).then((data) => {
      console.log(data);
      dispatch(getBestAC(data));
    }); // надо вынести в Thunk
  }, []);
  console.log(best);
  return (
    <div className="row">
      {best.map((el) => (
        <OneFavorite
          key={el.id}
          photo={el.photo}
          id={el.id}
          name={el.name}
          price={el.price}
        />
      ))}
    </div>
  );
}

export default FavoriteProducts;
