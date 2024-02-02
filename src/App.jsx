import { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="flex items-center justify-center mt-16">
      <button className="p-2 bg-slate-600 text-white rounded-lg" onClick={handleOpenModal}>
        Open Modal
      </button>
      <Modal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
