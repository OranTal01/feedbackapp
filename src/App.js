import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import FeedbackList from './components/feedback-list/FeedbackList';
import FeedbackStats from './components/feedback-stats/FeedbackStats';
import FeedbackForm from './components/feedback-form/FeedbackForm';
import AboutIconLink from './components/About-icon-link/AboutIconLink.jsx';

import AboutPage from './pages/about-page/AboutPage.jsx';

import FeedbackProvider from './context/feedbackContext';

import './app.css';

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
