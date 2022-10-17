import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

export function clientesLoader() {
  const clientes = [
    {
      id: 1,
      nombre: "Juan",
      telefono: 102013313,
      email: "juan@correo.com",
      empresa: "Microsoft",
    },
    {
      id: 2,
      nombre: "Karen",
      telefono: 138198313,
      email: "karen@correo.com",
      empresa: "Intel",
    },
    {
      id: 3,
      nombre: "Josue",
      telefono: 31983913,
      email: "josue@correo.com",
      empresa: "Amazon",
    },
    {
      id: 4,
      nombre: "Miguel",
      telefono: 319381983,
      email: "miguel@correo.com",
      empresa: "Google",
    },
    {
      id: 5,
      nombre: "Pedro",
      telefono: 1398198938,
      email: "pedro@correo.com",
      empresa: "Meta",
    },
  ];
  return clientes;
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
