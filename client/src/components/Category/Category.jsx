import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import { getAllCategoryFunc } from '../../redux/actions/CategoryAction';
import MediaCard from './Card';
// import './Category.module.css';

export default function Category() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryFunc());
  }, []);
  return (
    <div className="card-group m-auto">
      <Box sx={{
        width: '80%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto',
      }}
      >
        {categories.map((el) => (
          <MediaCard id={el.id} img={`http://localhost:3000/${el.img}`} name={el.name} />
          // <div className="col-md-4 categories">
          //   <div className="card mx-3 mt-4" style={{ width: '300px' }}>
          //     <img className="card-img-top" src={`http://localhost:3000/${el.img}`} alt="Card" />
          //     <Link key={el.id} className="nav-link active" aria-current="page" to={`/${el.id}`}>
          //       <div className="card-img-overlay">
          //         <h4 className="card-title categories">{el.name}</h4>
          //         <p className="card-text">
          //           <Link key={el.id} className="nav-link active categories"
          // aria-current="page" to={`/${el.id}`}>{el.name}</Link>
          //         </p>
          //       </div>
          //     </Link>
          //   </div>
          // </div>
        ))}
      </Box>
    </div>
  );
}
