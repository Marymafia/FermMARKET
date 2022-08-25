import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategoryFunc } from '../../redux/actions/CategoryAction';
import './Seller.module.css';

export default function LKwithSeller() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryFunc());
  }, []);
  console.log(categories);
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Добавить новый продукт</h3>
                <form>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="firstName" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="firstName">имя продукта</label>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <label className="form-label select-label">Выберите категорию</label>
                    <div className="col-12">

                      <select className="select form-control-lg">
                        <option value="1" disabled>Категория продукта</option>
                        {categories.map((el) => <option value="2">{el.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <input type="text" className="form-control form-control-lg" id="birthdayDate" />
                        <label htmlFor="birthdayDate" className="form-label">Описание продукта</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input type="email" id="emailAddress" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="emailAddress">Цена продукта</label>
                      </div>
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input type="file" id="emailAddress" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="emailAddress">Загрузине фотографию</label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <input className="gradient-custom" type="submit" value="Опубликовать" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
