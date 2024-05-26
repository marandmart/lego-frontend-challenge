import ModalProvider from "./context/modal";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <ModalProvider>
        <Home />
      </ModalProvider>
    </>
  );
}

export default App;
