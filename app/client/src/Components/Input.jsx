import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Input({ label, type, name, error }) {

  const [visible, setVisible] = useState(false);

  const labelFocusInput = e => {

    const input = e.currentTarget.nextSibling;
    input.focus();

  }

  const shiftLabel = e => {

    const parent = e.target.parentElement;
    parent.classList.add('shift-label');

  }

  const unshiftLabel = e => {

    const parent = e.target.parentElement;
    const value = e.target.value?.trim();

    if (!value) parent.classList.remove('shift-label');

  }

  const toggleInputVisibility = e => {

    setVisible(!visible);

    const input = e.currentTarget.previousSibling;
    input.focus();

  }

  return (
    <div className="input-container">

      <div className="input">

        <div className="label" onClick={labelFocusInput}>{ label }</div>

        <input
          type={type === 'password' && !visible ? type : 'text'}
          name={name}
          onFocus={shiftLabel}
          onBlur={unshiftLabel}
        />

        {
          type === 'password' &&
          <button type="button" onClick={toggleInputVisibility}>
            <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
          </button> 
        }

      </div>

      <div className="error">{ error }</div>

    </div>
  );
}

export default Input;
