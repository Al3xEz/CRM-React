import { useNavigate, Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function actionNuevoCliente({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  const errores = [];

  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
    return errores;
  }
}

const NuevoCliente = () => {
  const navigate = useNavigate();
  const errores = useActionData();
  console.log(errores);

  return (
    <>
      <h1 className="font-black text-4xl text-slate-800">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

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
        <Form method="post">
          <Formulario />

          <input
            type="submit"
            className="mt-5 w-full bg-slate-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  );
};

export default NuevoCliente;
