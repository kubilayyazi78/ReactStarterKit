import modalData from "../modal.js";
import { useModals } from "../utils/modal.js";
export default function Modal() {
  const modals = useModals();
  return (
    <div>
      {modals.map((modal) => {
       const m =modalData.find(m=>m.name===modal.name)

       return <m.element/>
      })}
    </div>
  );
}
