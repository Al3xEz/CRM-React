export async function obtenerClientes() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const clientes = await respuesta.json();

  return clientes;
}
