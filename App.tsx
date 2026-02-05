import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Guides from './pages/Guides';
import GuideDetail from './pages/GuideDetail';
import TechStack from './pages/TechStack';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<GuideDetail />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/om" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;