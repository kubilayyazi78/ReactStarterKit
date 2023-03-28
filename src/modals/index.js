import modalData from "../modal.js";
import { useModals,destroyModal } from "../utils/modal.js";
export default function Modal() {
  const modals = useModals();
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      {modals.map((modal) => {
        const m = modalData.find((m) => m.name === modal.name);

        return (
          <div className="hidden last:block bg-white shadow-lg rounded">
            <m.element data={modal.data} close={destroyModal}/>
          </div>
        );
      })}
    </div>
  );
}
