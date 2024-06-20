import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Yowch!</h1>
      <p>... Huh, this was not supposed to happen.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}