
import { render } from 'react-dom';
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Expenses from './routes/Expenses/index.tsx';
import Invoices from './routes/Invoices/index.tsx';
import NotFound from './routes/NotFound/index.tsx';
import Invoice from './routes/Invoices/Invoice/index.tsx';
import InvoicesIndex from './routes/Invoices/InvoiceIndex/index.tsx';
import BemVindo from './routes/Bem-vindo/index.tsx';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>

        {/*sub rota para mostrar um conteudo no index do App*/}
        <Route index element={<BemVindo />} />

        <Route path="expenses" element={<Expenses />} />

        <Route path="invoices" element={<Invoices />}>

          {/*sub rota para mostrar o conteudo*/}
          <Route path=":invoiceId" element={<Invoice />} />
          {/*sub rota para mostrar um conteudo no index da invoices*/}
          <Route index element={<InvoicesIndex />} />

        </Route>
        {/*rota não encontrada*/}
        <Route path="*" element={<NotFound />}
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
