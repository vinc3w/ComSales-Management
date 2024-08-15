import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { LIMIT_COUNT } from "../config.json";

function Pagination({ pageType, page, count }) {

  const maxPage = Math.ceil(count / LIMIT_COUNT);

  return (
    <div className="pagination">

      <div className="page-link">
        {
          page === 1 ?
          <div className="wrapper disabled">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div> :
          <Link to={`/${pageType}/${page - 1}`}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Link>
        }
      </div>

      {
        <>
        {
          page !== 1 &&
          <div className="page-link">
            <Link to={`/${pageType}/${page - 1}`}>
              { page - 1 }
            </Link>
          </div>
        }
        <div className="page-link">
          <Link to={`/${pageType}/${page}`} className="on">
            { page }
          </Link>
        </div>
        {
          page < maxPage &&
          <div className="page-link">
            <Link to={`/${pageType}/${page + 1}`}>
              { page + 1 }
            </Link>
          </div>
        }
        </>
      }

      <div className="page-link">
        {
          page >= maxPage ?
          <div className="wrapper disabled">
            <FontAwesomeIcon icon={faChevronRight} />
          </div> :
          <Link to={`/${pageType}/${page + 1}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        }
      </div>

    </div>
  );
}

export default Pagination;
