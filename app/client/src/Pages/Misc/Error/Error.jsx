import { Link, useRouteError } from "react-router-dom";
import getURLParams from "../../../utils/getURLParams";

function Error() {

  const error = useRouteError();

  return (
    <div id="error">

      <div className="content">

        <div className="title">{error?.status}</div>
        <div className="error">{getURLParams('message') || error?.statusText || error?.message}</div>
        <div className="sub-title">Sorry, an unexpected error has occurred.</div>

        <Link to="/">Back</Link>
          
      </div>

    </div>
  );
}

export default Error;
