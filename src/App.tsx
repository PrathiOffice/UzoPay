import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </AnimatePresence>

  );
}
