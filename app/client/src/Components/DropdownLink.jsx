import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function DropdownLink({ label, selected, options }) {

  const toggleMenu = e => {
    e.stopPropagation();
    const optionList = e.currentTarget.nextSibling;
    optionList.classList.toggle('show');

    setTimeout(() => {
      document.onclick = () => {
        optionList.classList.remove('show');
        document.onclick = null;
      }
    });
  }

  return (
    <div className="dropdown-link">

      <div className="label">{ label }:</div>
      <div className="dropdown-sub">

        <div className="trigger" onClick={toggleMenu}>
          { selected }
          <FontAwesomeIcon icon={faCaretRight} />
        </div>

        <div className="options">
          {
            options.map((o, i) => (
              <Link key={i} to={o.url} className="option">
                {o.label}
              </Link>
            ))
          }
        </div>

      </div>

    </div>
  );
}

export default DropdownLink;
