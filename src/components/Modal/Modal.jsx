import css from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = (modalImage, closeModal) => {
  return createPortal(
    <div className={css.Overlay} onClick={() => closeModal()}>
      <div className={css.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>,
    modalRoot
  );
};
