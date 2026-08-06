import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Variabels } from './pages/Variabels/Variabels';
import { VariabelsPage } from './pages/VariabelsPage/VariabelsPage';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="variabels" element={<Variabels />} />
          <Route path="variabels/:variabelsId" element={<VariabelsPage />} />
        </Route>
      </Routes>
    </>
  );
};
