import "./i18n";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPost from "./pages/BlogPost.jsx";
import ScrollToHash from './components/ScrollToHash.jsx';
import EventDetails from './pages/EventDetails.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
