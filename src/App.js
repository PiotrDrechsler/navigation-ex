import { useEffect, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import WebAppTemplate from 'components/WebAppTemplate';
import Home from './pages/Home';

import AboutMission from './pages/about/Mission';
import AboutTeam from './pages/about/Team';
import AboutReviews from './pages/about/Reviews';
import Blog from './pages/blog/';
import BlogPost from './pages/blog/Post';
import Login from './pages/Login';
import StoreWall from './pages/shop';
import Product from './pages/shop/Product';
import NotFound from './pages/NotFound';

import './App.css';

const About = lazy(() => {
  console.log('Loading About');
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(import('./pages/about'));
    }, 2000);
  });
});

export const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('location', location);
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<WebAppTemplate />}>
          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<AboutMission />} />
            <Route path="team" element={<AboutTeam />} />
            <Route path="reviews" element={<AboutReviews />} />
          </Route>

          {/* BLOG - INDEX */}
          <Route path="/blog" element={<Blog />} />

          {/* BLOG - POST */}
          <Route path="/blog/:category/:postId" element={<BlogPost />} />

          {/* LOGIN */}
          <Route path="/login" element={<Login />} />

          {/* SHOP */}
          <Route path="/shop" element={<StoreWall />} />
          <Route path="/product/:productId" element={<Product />} />

          {/* 404 */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
