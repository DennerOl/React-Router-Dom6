
import { render } from 'react-dom';
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expenses from './routes/Expenses/index.tsx';
import Invoices from './routes/Invoices/index.tsx';
import NotFound from './routes/NotFound/index.tsx';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />

        {/*rota não encontrada*/}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
