import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/Clientes";

export function clientesLoader() {
  return obtenerClientes();
}

const Index = () => {
  const clientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-slate-800">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>

      {clientes.length > 0 ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contactos</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente cliente={cliente} key={cliente.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10"> No hay clientes aún</p>
      )}
    </>
  );
};

export default Index;
