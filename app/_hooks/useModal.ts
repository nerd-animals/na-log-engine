import { useState } from 'react';

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };
  return { isOpenModal, openModal, closeModal };
}
