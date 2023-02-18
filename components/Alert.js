import React, { useState, useEffect } from "react";

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Set isModalVisible to true on mount
  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  // Show the modal only when isModalVisible is true
  return (
    <>
      {isModalVisible && (
        <div
          className="flex z-30 w-full h-2/5 flex-col bottom-0 fixed justify-end align-bottom pointer-events-none"
          onClick={handleCloseModal}
        >
          <div className="mr-[2vw] ml-auto mb-5 bg-orange-200 rounded-sm border-2 border-white text-zinc-900 transition-all pointer-events-auto animate-engine cursor-help max-w-xs p-5">
            <p>
              What if a conversation took place in every direction? What would
              surround it? What would remain at the corners? A promise? A
              threat?
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
