import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <div id="error-page" className="container mx-auto text-center">
        <h1 className="text-5xl my-5">Oops! 404 Error</h1>
        <p className="text-3xl my-5">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default Error;
