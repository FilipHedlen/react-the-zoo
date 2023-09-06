import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AnimalPage from './components/AnimalPage';
import './index.css';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/animal/:id" element={<AnimalPage />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  console.error('Error');
}
