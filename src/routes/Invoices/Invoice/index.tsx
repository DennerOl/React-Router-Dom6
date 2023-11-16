import { useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../../../data';



export default function Invoice() {

  const params = useParams();
  const navigate = useNavigate();

  const invoice = getInvoice(Number(params.invoiceId));

  return (
    <>
      {
        invoice && <main style={{ padding: "1rem" }}>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
          {/* crio um button para deletar uma invoice e volto para rota
de todas invoices e ainda mantenho o parametro digitado na caixa de pesquisa */}
          <p>
            <button
              onClick={() => {
                deleteInvoice(invoice.number);
                navigate("/invoices" + location.search);
              }}
            >
              Delete
            </button>
          </p>
        </main>
      }
    </>


  );
}