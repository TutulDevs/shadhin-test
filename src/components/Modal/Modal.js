import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import styles from "./Modal.module.css";

export const Modal = ({ visible, onClose, children, title }) => {
  const [portalElement, setPortalElement] = useState();
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    const portalElement = document.getElementById("modal-root");
    setPortalElement(portalElement);
    setIsBrowser(true);
  }, []);

  const mainModal = visible ? (
    <div id="modal" className={styles.modal}>
      <div className={cn(styles.outer)}>
        {title && <div className={cn( styles.title)}>{title}</div>}
        {children}

        <button type="button" className={styles.close} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  ) : null;

  return isBrowser ? ReactDOM.createPortal(mainModal, portalElement) : null;
};
