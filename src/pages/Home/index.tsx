import { useContext } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Banner from "../../components/Banner";
import { ModalContext } from "../../context";
import Article from "../../components/Article";
import Footer from "../../components/Footer";

const Home = () => {
  const { closeModal, isOpen } = useContext(ModalContext);

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleCloseModal} />
      <Header />
      <Banner />
      <Article sectionId="gifting" borderColor="orange" />
      <Footer />
    </>
  );
};

export default Home;
