import { useContext } from "react";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Banner from "../../components/Banner";
import { ModalContext } from "../../context/modal";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import { sectionArticles } from "../../context/data";

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
      <main>
        {sectionArticles.map(
          (
            {
              sectionTitle,
              sectionHeaderText,
              sectionId,
              borderColor,
              content,
            },
            index
          ) => (
            <Article
              sectionTitle={sectionTitle}
              sectionHeaderText={sectionHeaderText}
              borderColor={borderColor}
              sectionId={sectionId}
              content={content}
              index={index}
            />
          )
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
