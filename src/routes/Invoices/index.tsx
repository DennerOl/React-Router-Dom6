import { Link } from 'react-router-dom';
import { getInvoices } from '../../data';

export default function Invoices() {

  /* pego a lista de dados do data.ts*/
  const invoices = getInvoices();


  return (
    <div style={{ display: "flex" }}>

      {/* barra de navegação lateral */}
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* faço renderizer um link para cada uma das invoices
  do data.ts */}
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            /* rota dos invoices */
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
