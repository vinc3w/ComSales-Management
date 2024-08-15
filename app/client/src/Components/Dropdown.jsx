import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Dropdown({ label, name, defaultValue, options }) {

  const [selected, setSelected] = useState(defaultValue ?? null);

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
    <div className="dropdown">

      <input type="hidden" name={name} value={selected?.value ?? ''} />
      
      <div className="label">{ label }</div>

      <div className="dropdown-sub">

        <div className="trigger" onClick={toggleMenu}>
          { defaultValue || (selected?.label ?? 'None') }
          <FontAwesomeIcon icon={faCaretDown} />
        </div>

        <div className="options">
          {
            options.map((o, i) => (
              <div key={i} className="option" onClick={() => setSelected(o)}>
                { o.label }
              </div>
            ))
          }
        </div>

      </div>

    </div>
  );
}

export default Dropdown;
