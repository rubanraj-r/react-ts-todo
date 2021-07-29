import React from 'react';
import './AddButton.css';

interface Props {
  onClick: () => void;
};

const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="add-btn" onClick={() => onClick()}>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="plus"
        className="svg-plus-icon"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        />
      </svg>
    </button>
  );
}

export default AddButton;
