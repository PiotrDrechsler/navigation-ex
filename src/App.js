import { Routes, Route } from 'react-router-dom';

import WebAppTemplate from 'components/WebAppTemplate';
import Home from './pages/Home';
import About from './pages/about';
import AboutMission from './pages/about/Mission';
import AboutTeam from './pages/about/Team';
import AboutReviews from './pages/about/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Blog from './pages/blog/';
import BlogPost from './pages/blog/Post';

import './App.css';

export const App = () => {
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

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
