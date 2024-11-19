import React from "react";


function Model({ children, onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>Cart View</h3>
        <hr/>
        <button onClick={onClose} className="close-button">
          ×
        </button>
        {children}
      </div>
      <style  jsx="true">{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;          
          max-width: 90%;
          max-height: 90%;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Model;
