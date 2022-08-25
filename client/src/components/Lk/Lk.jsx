import React from 'react';
import { Link } from 'react-router-dom';
import LKwithSeller from './LKwithSeller';

function Lk() {
  return (
    <div>
      <Link className="btn btn-success btn-lg" to="/best">Мои избранные товары </Link>
      <LKwithSeller />
    </div>
  );
}

export default Lk;
