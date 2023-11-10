import './styles.css';
import { getInvoices } from '../../data';
import { NavLink, Outlet } from 'react-router-dom';

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
          /* diz quais itens da barra navlink esta ativo para mudar o style*/
          <NavLink className={({ isActive }) => isActive ? "dblock nav-red" : "dblock nav-blue"}
            /* rota dos invoices */
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
