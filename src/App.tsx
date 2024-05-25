import ModalProvider from "./context";
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
