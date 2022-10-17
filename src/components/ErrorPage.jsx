import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="space-y-8">
      <h1 className="text-center text-6xl font-extrabold mt-20 text-slate-800">
        CRM CLIENTES
      </h1>
      <p className="text-center font-bold text-red-800 text-3xl uppercase">
        Error
      </p>
      <p className="text-center font-bold">{error.message}</p>
    </div>
  );
};

export default ErrorPage;
