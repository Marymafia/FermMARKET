import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBestThunk } from '../../redux/actions/bestAction';

export default function CardCategory({ el }) {
  const dispatch = useDispatch();

  const addBest = () => {
    dispatch(addBestThunk(el));
  };
  return (
  // <div className="card" style={{ width: '18rem' }}>
  //   <h5 className="card-title">
  //     {el.name}
  //   </h5>
  //   <img src={el.photo} className="card-img-top" alt="..." />
  //   <div className="card-body">
  //     <h5 className="card-title">
  //       {el.title}
  //     </h5>
  //   </div>
  // </div>{{
    <div className="card mb-3" style={{ 'max-width': '540px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={el.photo} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <p className="card-text">{el.title}</p>
            <a>Избранное</a>
            <button onClick={addBest} type="button" className="btn btn-danger">&#10084;</button>

          </div>
        </div>
      </div>
    </div>
  );
}
