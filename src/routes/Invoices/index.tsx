import './styles.css';
import { getInvoices } from '../../data';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';

export default function Invoices() {

  /* pego a lista de dados do data.ts*/
  const invoices = getInvoices();

  const [searchParams, setSearchParams] = useSearchParams();


  return (
    <div style={{ display: "flex" }}>

      {/* barra de navegação lateral */}
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {/* caixa de pesquisa para busca */}
        <input
          value={searchParams.get("name") || ""}
          onChange={(event) => {
            const name = event.target.value;
            if (name) {
              setSearchParams({ name });
            } else {
              setSearchParams({});
            }
          }}
        />


        {invoices
          /* faço o filtro das palavras que digitei na caixa de pesquisa*/
          .filter((invoice) => {
            const name = searchParams.get("name");
            if (!name) return true;
            const invoiceName = invoice.name.toLowerCase();
            return invoiceName.startsWith(name.toLowerCase());
          })

          /* faço renderizer um link para cada uma das invoices
    do data.ts */
          .map((invoice) => (
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
