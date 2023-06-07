import React from "react";
import { closeModal } from "../features/modal/ModalSlice";
import { clearCart } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごを全て空にしますか？</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(closeModal());
              dispatch(clearCart());
            }}
          >
            OK
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            やめる
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
