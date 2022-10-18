import {
  useNavigate,
  Form,
  useLoaderData,
  useActionData,
  redirect,
} from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../data/Clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clienteId);
  if (Object.keys(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Error 404 | No hay resultados",
    });
  }
  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const errores = [];
  const email = datos.email;
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  if (!regex.test(email)) {
    errores.push("El email no es valido");
  }

  if (errores.length > 0) {
    return errores;
  }

  await actualizarCliente(params.clienteId, datos);
  return redirect("/");
}

const EditarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const errores = useActionData();
  return (
    <>
      <h1 className="font-black text-4xl text-slate-800">Editar Cliente</h1>
      <p className="mt-3 text-lg">Modifica los datos del cliente</p>

      <div className="flex justify-end">
        <button
          className="bg-slate-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => {
            navigate("/");
          }}
        >
          Volver
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-10">
        {errores?.length > 0 &&
          errores.map((item, index) => <Error key={index}>{item}</Error>)}
        <Form method="post" noValidate>
          <Formulario cliente={cliente} />

          <input
            type="submit"
            className="mt-5 w-full bg-slate-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer"
            value="Editar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default EditarCliente;
