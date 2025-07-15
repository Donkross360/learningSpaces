import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import HowItWorks from './components/HowItWorks';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyButton from './components/StickyButton';
import WaitlistPage from './pages/WaitlistPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ValueProposition />
              <HowItWorks />
              <Testimonial />
              <FAQ />
              <FinalCTA />
              <StickyButton />
            </>
          } />
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;