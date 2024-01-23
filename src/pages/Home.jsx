import { useState } from "react";
import StreamStartModal from "../component/StreamStartModal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="py-10 px-5 flex bg-[#f7f8fa] shadow-lg rounded-md text-[#4f5461]">
        <div className="mr-4">
          <p className="text-lg font-medium">Create your live stream</p>
        </div>
        <div>
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            + Create
          </button>
        </div>
      </div>
      <StreamStartModal
        isOpen={openModal}
        onClose={handleCloseModal}
        onSubmit={handleCloseModal}
      />
    </div>
  );
}
