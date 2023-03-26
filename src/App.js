import { createModal, useModals } from "./utils/modal";
import Modal from "./modals";
function App() {
  const modals = useModals();

  return (
    <div className="App">
      {modals.length > 0 && <Modal></Modal>}
      <button
        onClick={() => {
          createModal("login");
        }}
      >
        Modal Aç
      </button>
    </div>
  );
}

export default App;
