import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardCategory from '../components/CardCategory/CardCategory';
import MultipleInteractionCard from '../components/CardCategory/CurrentCard';
import { getCurrentCardsFunc } from '../redux/actions/CurrentCardsCategoryActions';

export default function CategoriesAllCard() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const allRooms = useSelector((state) => state.allRooms);
  // const hallid = allRooms[0].id;

  useEffect(() => {
    console.log(id);
    dispatch(getCurrentCardsFunc(id));
  }, []);

  const products = useSelector((state) => state.products);
  return (
    <div>
      {/* { products.map((el) => <CardCategory key={el.id} el={el} />)} */}
      {products.map((el) => (
        <MultipleInteractionCard
          key={el.id}
          photo={el.photo}
          name={el.name}
          title={el.title}
        />
      ))}
    </div>
  );
}
