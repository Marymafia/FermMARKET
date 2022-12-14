import './App.css';

import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar2 from './components/Navbar/Navbar2';
import SignIn from './components/SignIn/SignIn';
// import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
import Category from './components/Category/Category';
import { userCheck } from './redux/actions/userActions';
import CategoriesAllCard from './page/CategoriesAllCard';
import AboutCompany from './components/AboutCompany/AboutCompany';
import Contacts from './components/Contacts/Contacts';
import Lk from './components/Lk/Lk';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import FavoriteProducts from './components/FavoriteProducts/FavoriteProducts';
import SignUP2 from './components/SignUp/SignUp2';
import SinIn2 from './components/SignIn/SinIn2';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.addUser);

  useEffect(() => {
    dispatch(userCheck());
  }, []);
  return (
    <div className="app" style={{ width: '100vw' }}>
      <Navbar2 />
      <Logo />
      <Home />

      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/signin" element={<SinIn2 />} />
        <Route path="/signup" element={<SignUP2 />} />
        <Route path="/:id" element={<CategoriesAllCard />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/lk" element={<Lk />} />
        <Route path="/best" element={<FavoriteProducts />} />
        <Route component={Error} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
