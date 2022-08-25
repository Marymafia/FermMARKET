import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBestAC } from '../../redux/actions/bestAction';
import MultipleInteractionCard from './OneFavorite';

// import OneFavorite from './OneFavorite';

function FavoriteProducts() {
  // store = {best:[], user:{}, post:[]}
  const best = useSelector((store) => store.best);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('http://localhost:3000/api/addBest').then((response) => response.json()).then((data) => {
      dispatch(getBestAC(data));
    }); // надо вынести в Thunk
  }, []);
  return (
    <div className="row">
      {best.map((el) => (
        <MultipleInteractionCard
          key={el.id}
          photo={el.photo}
          id={el.id}
          name={el.name}
          price={el.price}
          el={el}
        />
      ))}
    </div>
  );
}

export default FavoriteProducts;
