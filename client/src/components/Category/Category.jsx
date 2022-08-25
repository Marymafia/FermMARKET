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
    <>
      <div className="card-group m-auto">
        <Box sx={{
          width: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 'auto',
        }}
        >
          {categories.map((el) => (
            <MediaCard key={el.id} id={el.id} img={`http://localhost:3000/${el.img}`} name={el.name} />

          ))}
        </Box>
      </div>

      <div style={{ textAlign: 'center', marginTop: '5px' }}>

        <h1>
          <a style={{ textDecoration: 'none', color: 'black' }} href="/about">
            О компании

          </a>
          <a href="/"><img style={{ width: '300px' }} src="/loo.jpeg" alt="s" /></a>

        </h1>

        <p>
          Уважаемые клиенты,
          Вас приветствует компания
          «FermaMARKET»
        </p>

        <p>
          Приоритет нашей
          компании — доставка качественных
          продуктов
        </p>

        <p>
          для людей по приемлемым ценам. Спасибо Вам, что выбираете нас!
        </p>
        Становимся лучше, развиваемся для
        Вас, день ото дня, год от года.

        <p style={{ marginTop: '5px' }}>

          С уважением,
          руководители проекта — Хахонина Мария , Айбазов Умар , Сеник Аракелян.
        </p>

      </div>

    </>
  );
}
