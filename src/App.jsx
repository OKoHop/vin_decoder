import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Variabels } from './pages/Variabels/Variabels';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="variabels" element={<Variabels />} />
        <Route path="variabels/:variabelsId" />
      </Route>
    </Routes>
  );
};
