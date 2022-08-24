import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBestAC } from '../../redux/actions/bestAction';

export default function OneFavorite({
  name, title, photo, price, id,
}) {
  console.log(photo, id, name);
  const dispatch = useDispatch();
  const removeHandler = () => {
    fetch(`http://localhost:3000/api/addBest/${id}`).then((response) => {
      dispatch(removeBestAC(id));
    });
  };
  return (
    <div className="my-3 col">
      {photo && (
      <div className="card" style={{ width: '18rem' }}>
        <img src={photo} className="card-img-top" alt="..." />
        <h2>{name}</h2>
        <h6>
          {price}
          рублей
        </h6>
        <div className="card-body" />
        <button onClick={removeHandler} type="button" className="btn btn-outline-danger my-2">&#128148;Удалить</button>
      </div>
      )}
    </div>
  );
}
