import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions/userActions';

function Navbar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.addUser);
  const logOut = () => {
    dispatch(userLogout());
    navigate('/');
  };

  return (

    <nav className="navbar">
      <div className="container-fluid">

        {user.name}
        <Link className="btn btn-light btn-lg" to="/">Home</Link>
        <Link className="btn btn-light btn-lg" to="/contacts">Контакты</Link>
        <Link className="btn btn-light btn-lg" to="/about">О комапнии</Link>

        {!user.id
          ? (
            <>
              <Link className="btn btn-light btn-lg" to="/signup">Регистрация</Link>
              <Link className="btn btn-light btn-lg" to="/signin">Вход</Link>
            </>
          )
          : (
            <>
              <button onClick={logOut} type="button" className="btn btn-light btn-lg">Выход</button>
              <Link className="btn btn-light btn-lg" to="/lk">Личный кабинет</Link>
            </>
          )}

      </div>
    </nav>
  );
}

export default Navbar;
