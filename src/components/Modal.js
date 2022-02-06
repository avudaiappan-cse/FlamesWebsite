import React from "react";

const Modal = ({ letter, context, onClose }) => {
  return (
    <div className="modal">
      <span className="closeBtn" onClick={onClose}>
        X
      </span>
      <h3>Hurray, It's Generated!</h3>
      <div className="modalFix">
        <h2 className="letter">{letter}</h2>
      </div>
      <p>
        You and Your Partners are <span className="context">{context}</span>
      </p>
    </div>
  );
};

export default Modal;
