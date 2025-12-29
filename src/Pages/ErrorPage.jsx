import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="font-bold">
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p className="text-red-600">{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
