import { useRef, useEffect } from "react";

const Modal = ({ showModal, onClose }) => {
  const myRef = useRef(false);

  useEffect(() => {
    if (showModal && myRef.current) {
      myRef.current.showModal();
    } else if (!showModal && myRef.current) {
      myRef.current.close();
    }
  }, [showModal, myRef]);

  return (
    <dialog ref={myRef} className="modal p-32 mx-56 rounded-2xl text-center">
      <p className="mb-9">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia possimus
        velit sint obcaecati facere dolor optio, pariatur dolores suscipit
        perferendis culpa eligendi dolore veniam architecto iusto rerum saepe,
        sequi nostrum?
      </p>
      <button
        className="p-2 bg-red-400 mx-auto w-1/5 text-white rounded-lg"
        onClick={onClose}
      >
        Close
      </button>
    </dialog>
  );
};

export default Modal;
