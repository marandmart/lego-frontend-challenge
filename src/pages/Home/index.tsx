import { useContext } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { ModalContext } from "../../components/context";
import Banner from "../../components/Banner";

const Home = () => {
  const { closeModal, isOpen } = useContext(ModalContext);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        children={<h1>TESTE</h1>}
      />
      <Header />
      <Banner />
    </>
  );
};

export default Home;
