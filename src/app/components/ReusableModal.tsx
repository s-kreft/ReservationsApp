import React, { useEffect, useRef } from "react";

export type AddExpenseFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  buttons?: HTMLButtonElement[];
};

export const ReusableModal: React.FC<AddExpenseFormModalProps> = ({
  isOpen,
  onClose,
  children,
  buttons = [],
}) => {
  const modal = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    modal.current?.showModal();
  }, [isOpen]);

  return (
    <div className="p-6">
      {/* Open the modal using document.getElementById().showModal() method */}
      {/* <button className="btn" onClick={openModal}>
          Open Modal
        </button> */}

      <dialog ref={modal} id="reusable_modal" className="modal">
        <div className="modal-box">
          {children}
          <div className="modal-action">
            <form method="dialog">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className="btn"
                  onClick={() => button.click()}
                >
                  {button.textContent}
                </button>
              ))}
              <button className="btn" onClick={() => onClose()}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
