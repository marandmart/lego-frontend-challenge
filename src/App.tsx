import Home from "./pages/Home";
import ModalProvider from "./components/context";

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
